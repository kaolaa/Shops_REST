const GoogleStrategy = require("passport-google-oauth20").Strategy;
const LocalStrategy = require("passport-local").Strategy;
const key = require("./key");
const bcrypt = require("bcryptjs");
const mongodb = require("mongodb");

//monogodb
const dbName = "shops";

module.exports = function(passport) {
  passport.use(
    new GoogleStrategy(
      {
        clientID: key.googleClientID,
        clientSecret: key.googleClientSecret,
        callbackURL: "/auth/google/callback",
        proxy: true
      },
      async (accessToken, refreshToken, profile, done) => {
        const image = profile.photos[0].value.substring(
          0,
          profile.photos[0].value.indexOf("?")
        );
        const newUser = {
          googleID: profile.id,
          FirstName: profile.name.givenName,
          LastName: profile.name.familyName,
          email: profile.emails[0].value,
          image: image
        };

        // Check for existing user
        const Collection = await GetCollection("users");

        await Collection.findOne({
          googleID: profile.id
        }).then(user => {
          if (user) {
            // Return user
            done(null, user);
          } else {
            // Create user
            new User(newUser).save().then(user => done(null, user));
          }
        });
      }
    )
  );
  passport.use(
    new LocalStrategy(
      { usernameField: "email" },
      async (email, password, done) => {
        // Check for existing user
        const Collection = await GetCollection("users");

        await Collection.findOne({
          email: email
        }).then(user => {
          if (!user) {
            // Return user
            return done(null, false, { message: "Email introuvable" });
          }
          // Match password
          bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
              return done(null, user);
            } else {
              return done(null, false, { message: "mot de passe incorrect " });
            }
          });
        });
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id).then(user => done(null, user));
  });
};

// module.exports = function(passport) {

//     passport.use(
//       new GoogleStrategy(
//         {
//           clientID: key.googleClientID,
//           clientSecret: key.googleClientSecret,
//           callbackURL: "/auth/google/callback",
//           proxy: true
//         },
//         (accessToken, refreshToken, profile, done) => {
//           const newUser = {
//             googleID: profile.id,
//             FirstName: profile.name.givenName,
//             LastName: profile.name.familyName,
//             email: profile.emails[0].value
//           };
//           // Check for existing user
//           collection
//             .findOne({
//               googleID: profile.id
//             })
//             .then(user => {
//               if (user) {
//                 // Return user
//                 done(null, user);
//               } else {
//                 // Create user
//                 collection
//                   .insert(
//                     newUser
//                     //   , function(err, insertedId) {
//                     //   let reponse;
//                     //   console.log("++++" + insertedId);

//                     //   if (!err) {
//                     //     reponse = {
//                     //       succes: true,
//                     //       result: insertedId.ops[0]._id,
//                     //       error: null,
//                     //       msg: "Ajout réussi " + insertedId.ops[0]._id
//                     //     };
//                     //   } else {
//                     //     reponse = {
//                     //       succes: false,
//                     //       error: err,
//                     //       msg: "Problème à l'insertion"
//                     //     };
//                     //   }
//                     //   callback(reponse);
//                     // }
//                   )
//                   .then(user => done(null, user));
//               }
//             });
//         }
//       )
//     );

//     passport.use(
//       new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
//         // Check for existing user
//         collection
//           .findOne({
//             email: email
//           })
//           .then(user => {
//             if (!user) {
//               return done(null, false, { message: "Email introuvable" });
//             }
//             // Match password
//             bcrypt.compare(password, user.password, (err, isMatch) => {
//               if (err) throw err;
//               if (isMatch) {
//                 return done(null, user);
//               } else {
//                 return done(null, false, {
//                   message: "mot de passe incorrect "
//                 });
//               }
//             });
//           });
//       })
//     )

//   passport.serializeUser((user, done) => {
//     done(null, user.id);
//   });

//   passport.deserializeUser((id, done) => {
//     User.findById(id).then(user => done(null, user));
//   });
// };

async function GetCollection(name) {
  const client = await mongodb.MongoClient.connect(
    "mongodb://kaolaa:kaola77@ds141924.mlab.com:41924/shops",
    {
      useNewUrlParser: true
    }
  );

  return client.db(dbName).collection(name);
}

//

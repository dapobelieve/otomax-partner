export default function({ router, store, next }) {
  next();
  // if (!store.state.auth.token) {
  //   router.replace({
  //     name: "login"
  //   });
  // } else {
  //   next();
  // }
}
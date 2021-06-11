export default function({ router, store, next }) {
  // if (!store.state.auth.token) {
  //   router.replace({
  //     name: "login"
  //   });
  // } else {
    next();
  // }
}
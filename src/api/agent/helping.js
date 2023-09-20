export default class Helping {
  static getConfig() {
    let token = localStorage.token;
    return {
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : null,
      },
    };
  }
}
export class Config {
  static TELEGRAM_APP_ID = 29877480; // YOUR APP ID EX : 324893724923
  static TELEGRAM_APP_HASH = 7122a97c2472fce123dadd90d9cb14de; // YOUR APP HASH EX: "aslkfjkalsjflkasf"
  static MODE = 2; // 1 FOR 1 BY 1 RUN & 2 FOR MASS RUN
  static USEAUTOUPGRADE = true; //USE AUTO UPGRADE OR NO
  static REPAINTER = true; //USE INCORRECT COLOR REPAINTER
  static CUSTOMDELAYINMIN = undefined; //CUSTOM DELAY IN MINUTES EX : 60 = 60 minutes
  static TEMPLATE = {
    templateID: 689952357,
    startArea: 265864,
    endArea: 137991,
    correctColor: "#FEFFFE",
  }; // configure fren template by finding the id, color, start area and end area (is a rectangle start from top left, and end on bottom right)
}

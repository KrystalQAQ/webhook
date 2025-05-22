import { request } from "./request";
let user = {
  staffId: "311693518172209",
  tUnitEntityId: "5748844408942362643",
  unitType: "sy",
  jobStr: "06",
  name: "周浩然",
};

// 日管控清单
export async function getDayList() {
  return request("https://api.krystal.fit/getDayList?token=2542532345");
}
// 日管控清单
export async function getWeekList() {
  return request("https://api.krystal.fit/getWeekList?token=2542532345");
}
// 日管控清单
export async function getMonthList() {
  return request("https://api.krystal.fit/getMonthList?token=2542532345");
}
export async function getStatus() {
  return request("https://api.krystal.fit/api/status?token=2542532345");
}

export async function updateCookie(cookie, pwd) {
  return request(
    "https://api.krystal.fit/updateCooike?token=2542532345&value=" +
      cookie +
      "&pwd=" +
      pwd
  );
}

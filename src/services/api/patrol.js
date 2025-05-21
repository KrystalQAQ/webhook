import { request } from "./request";
let user = {
  staffId: "311693518172209",
  tUnitEntityId: "5748844408942362643",
  unitType: "sy",
  jobStr: "06",
  name: "周浩然",
};

// 日管控清单
export async function getPatrolList() {
  return request("https://api.krystal.fit/getDayList");
}

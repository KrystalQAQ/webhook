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
  const data = {
    staffId: user.staffId,
    unitType: user.unitType,
    pageCurrent: 1,
    pageRows: 40,
    tUnitEntityId: user.tUnitEntityId,
    equipmentRegistrationCode: "",
    xklincenseNumber: "",
    stationName: "",
  };
  return request("/we/patro/getLatrolList", data);
}

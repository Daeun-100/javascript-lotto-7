import Lotto from "../src/Lotto";
import { MissionUtils } from "@woowacourse/mission-utils";
import LottoMachine from "../src/models/LottoMachine";

describe("로또머신 테스트", () => {
  test("입력받은 count에 맞게 로또배열을 생성한다", () => {
    const result = LottoMachine.generateLottos(2);
    expect(result.length).toBe(2);
  });
});

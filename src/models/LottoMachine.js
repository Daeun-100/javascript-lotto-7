import { Random } from "@woowacourse/mission-utils";
import Lotto from "../Lotto";

export default class LottoMachine {
  static generateLottos(count) {
    const lottos = [];
    for (let i = 0; i < count; i++) {
      const randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      const newLotto = new Lotto(randomNumbers);
      lottos.push(newLotto);
    }
    return lottos;
  }
}

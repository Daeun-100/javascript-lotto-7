import { Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import InputView from "./View/inputView.js";
import OutputView from "./View/OutputView.js";
import Rank from "./Rank.js";
const LottoPrice = 1000;
export default class LottoMachine {
  #lottos;
  #rank;
  #inputView;
  #outputView;
  constructor() {
    this.#lottos = [];
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
  }
  async playLotto() {
    const amount = await this.#inputView.inputAmount();
    this.generateLottosByAmount(amount);
    const { count, lottos } = this.getLottoInfo();
    this.#outputView.printLottoCount(count);
    this.#outputView.printLottos(lottos);
    const winNumbers = await this.#inputView.inputWinNumbers();
    const bonusNumbers = await this.#inputView.inputBonusNumber(winNumbers);
    this.#rank = new Rank(this.#lottos, winNumbers, bonusNumbers);
    this.#outputView.printWin(this.#rank.getMatchResult());
    const returnRate = this.#rank.getReturnRate(amount);
    this.#outputView.printReturnRate(returnRate);
  }
  generateLottosByAmount(amoumt) {
    const count = Math.floor(amoumt / LottoPrice);
    for (let i = 0; i < count; i++) {
      const lotto = new Lotto(this.generateLottoNumbers());
      this.#lottos.push(lotto);
    }
  }

  generateLottoNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  getLottoInfo() {
    return {
      count: this.#lottos.length,
      lottos: this.#lottos.map((lotto) => lotto.getLottoNumbers()),
    };
  }
}

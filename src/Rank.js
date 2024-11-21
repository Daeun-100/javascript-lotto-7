const MatchResult = {
  "1위": 0,
  "2위": 0,
  "3위": 0,
  "4위": 0,
  "5위": 0,
};
const Prize = {
  "1위": 2000000000,
  "2위": 30000000,
  "3위": 1500000,
  "4위": 50000,
  "5위": 5000,
};
import { Console } from "@woowacourse/mission-utils";
export default class Rank {
  #lottos;
  #winNumber;
  #bonusNumber;
  #matchResult;
  constructor(lottos, winNumber, bonusNumber) {
    this.#lottos = lottos;
    this.#winNumber = winNumber;
    this.#bonusNumber = bonusNumber;
    this.#matchResult = this.MatchResult();
  }
  //winNumber와 몇개 일치하는지 확인
  getMatchCount(lottoNumbers) {
    let matchCount = 0;
    lottoNumbers.forEach((number) => {
      if (this.#winNumber.includes(number)) {
        matchCount += 1;
      }
    });
    return matchCount;
  }

  isBonusMatch(lottoNumbers) {
    return lottoNumbers.includes(this.#bonusNumber);
  }
  MatCountToRank(matchCount) {
    if (matchCount === 3) return 5;
    if (matchCount === 4) return 4;
    if (matchCount === 5) {
      if (this.isBonusMatch(lottoNumbers)) {
        return 2;
      } else {
        return 3;
      }
    }
    if (matchCount === 6) return 1;
    return null;
  }

  MatchResult() {
    const matchResult = { ...MatchResult };
    this.#lottos.forEach((lotto) => {
      const lottoNumbers = lotto.getLottoNumbers();
      const matchCount = this.getMatchCount(lottoNumbers);
      const rank = this.MatCountToRank(matchCount);
      if (rank) {
        matchResult[rank + "위"] += 1;
      }
    });
    return matchResult;
  }
  getMatchResult() {
    return this.#matchResult;
  }
  getReturnRate(amount) {
    let prize = 0;
    Object.keys(this.#matchResult).forEach((rank) => {
      if (this.#matchResult[rank]) {
        prize += Prize[rank] * this.#matchResult[rank];
      }
    });
    return (prize / amount) * 100;
  }
}

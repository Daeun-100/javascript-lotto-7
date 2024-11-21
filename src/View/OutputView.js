import { Console } from "@woowacourse/mission-utils";

export default class OutputView {
  printResult(result) {
    Console.print(result);
  }
  printLottoCount(count) {
    Console.print(`${count}개를 구매했습니다`);
  }
  printLottos(lottos) {
    lottos.forEach((lotto) => Console.print(lotto));
  }
  printWin(matchResult) {
    Console.print("당첨 통계");
    Console.print("---");
    Console.print(`3개 일치 (5,000)원 - ${matchResult["5위"]}`);
    Console.print(`4개 일치 (5,0000)원 - ${matchResult["4위"]}`);
    Console.print(`5개 일치 (5,00000)원 - ${matchResult["3위"]}`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (5,000000)원 - ${matchResult["2위"]}`
    );
    Console.print(`6개 일치 (5,00000000)원 - ${matchResult["1위"]}`);
  }
  printReturnRate(returnRate) {
    Console.print(`총 수익률은 ${returnRate.toFixed(2)}%입니다`);
  }
}

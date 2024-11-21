import Lotto from "../src/Lotto";
import LottoMachine from "../src/LottoMachine";

describe("로또 머신 클래스 테스트", () => {
  const lottoMachine = new LottoMachine();
  test("중복되지 않는 6개의 숫자 생성 ", () => {
    const lottoNumbers = lottoMachine.generateLottoNumbers();
    const numbersSet = new Set(lottoNumbers);
    expect(lottoNumbers.length == 6 && numbersSet.size == 6).toBeTruthy();
  });

  // TODO: 추가 기능 구현에 따른 테스트 코드 작성
});

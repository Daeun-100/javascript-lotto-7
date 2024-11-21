export default class Validate {
  validateInput() {
    if (true) {
      throw new Error("[ERROR] 에러 메시지");
    }
  }
  validateAmount(amount) {
    if (amount < 1000) {
      throw new Error("[ERROR] 1000원 이상 입력");
    }
    if (amount % 1000 !== 0) {
      throw new Error("[ERROR] 1000원 단위로 입력");
    }
  }
  validateWinNumbers(winNumbers) {
    if (winNumbers.length !== 6) {
      throw new Error("[ERROR] 숫자 6개 입력");
    }
    const setWinNumbers = new Set(winNumbers);
    winNumbers.forEach((number) => {
      if (isNaN(number)) {
        throw new Error("[ERROR] 숫자를 입력해주세요");
      }
      if (!Number.isInteger(number) || number < 0 || number > 45) {
        throw new Error("[ERROR] 1~45 사이의 정수를 입력해주세요");
      }
    });
    if (setWinNumbers.size !== 6) {
      throw new Error("[ERROR] 중복입력 불가능");
    }
  }
  validateBonusNumber(bonusNumber, winNumbers) {
    if (isNaN(bonusNumber)) {
      throw new Error("[ERROR] 숫자를 입력해주세요");
    }
    if (winNumbers.includes(bonusNumber)) {
      throw new Error("[ERROR] 당첨 숫자와 중복되지 않는 숫자");
    }
  }
}

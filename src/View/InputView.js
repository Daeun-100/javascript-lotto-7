import { Console } from "@woowacourse/mission-utils";
import Validate from "../Validate/Validate.js";

export default class InputView {
  #validate;
  constructor() {
    this.#validate = new Validate();
  }
  validateInput(input) {
    //validate 모아ㅗㅎ음
    this.#validate.validateInput(input);
  }

  handleError(e, callback) {
    Console.print(e.message);
    return callback();
  }
  async inputAmount() {
    try {
      let input = await Console.readLineAsync("구입금액을 입력해주세요\n");
      input = input.trim(); //input 가공
      //validate
      this.#validate.validateAmount(input);
      //input값 리턴, 다른 class에서 받아서 사용
      return input;
    } catch (e) {
      //에러 발생시 다시 input
      return this.handleError(e, this.inputAmount.bind(this));
    }
  }

  async inputWinNumbers() {
    try {
      let input = await Console.readLineAsync("당첨번호를 입력해주세요\n");
      let inputArr = input.split(","); //input 가공
      inputArr = inputArr.map((number) => Number(number.trim()));
      //validate
      Console.print(inputArr);
      this.#validate.validateWinNumbers(inputArr);
      //input값 리턴, 다른 class에서 받아서 사용
      return inputArr;
    } catch (e) {
      //에러 발생시 다시 input
      return this.handleError(e, this.inputWinNumbers.bind(this));
    }
  }
  async inputBonusNumber(winNumbers) {
    try {
      let input = await Console.readLineAsync("보너스 번호를 입력해주세요\n");
      input = Number(input.trim()); //input 가공
      //validate
      this.#validate.validateBonusNumber(input, winNumbers);
      //input값 리턴, 다른 class에서 받아서 사용
      return input;
    } catch (e) {
      //에러 발생시 다시 input
      return this.handleError(e, this.inputBonusNumber.bind(this, winNumbers));
    }
  }

  async inputText() {
    try {
      let input = await Console.readLineAsync("input text를 입력해주세요");
      Console.print("");
      input = input.trim(); //input 가공
      //validate
      this.validateInput(input);
      //input값 리턴, 다른 class에서 받아서 사용
      return input;
    } catch (e) {
      //에러 발생시 다시 input
      return this.handleError(e, this.input.bind(this));
    }
  }
}

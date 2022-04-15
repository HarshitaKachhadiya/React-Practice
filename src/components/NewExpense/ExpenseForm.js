//single input validation
/* import React, { useState } from "react";

import "./ExpenseForm.css"; */

/* class ExpenseForm extends Component {
  constructor() {
    this.state = {
      enteredTitle: "",
    };
  }

  titleChangeHandler(event) {
    this.setState({ enteredTitle: event.target.value });
  }

  render() {
    return (
      <input
        type="text"
        value={this.state.enteredTitle}
        onChange={this.titleChangeHandler.bind(this)}
      />
    );
  }
} */

/* const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredTitleTouched, setEnteredTitleTouched] = useState(false); */
// const [userInput, setUserInput] = useState({
//   enteredTitle: '',
//   enteredAmount: '',
//   enteredDate: '',
// });

/* const enteredTitleIsValid = enteredTitle.trim() !== "";
  const titleInputIsInValid = !enteredTitleIsValid && enteredTitleTouched;

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value); */
// setUserInput({
//   ...userInput,
//   enteredTitle: event.target.value,
// });
// setUserInput((prevState) => {
//   return { ...prevState, enteredTitle: event.target.value };
// });
/* };

  const titleInputBlurHandler = (event) => {
    setEnteredTitleTouched(true);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value); */
// setUserInput({
//   ...userInput,
//   enteredAmount: event.target.value,
// });
/* };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value); */
// setUserInput({
//   ...userInput,
//   enteredDate: event.target.value,
// });
/* };

  const submitHandler = (event) => {
    event.preventDefault();

    setEnteredTitleTouched(true);

    if (!enteredTitleIsValid) {
      return;
    }

    console.log(enteredTitle);

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");

    setEnteredTitleTouched(false);
  };

  const titleInputClasses = titleInputIsInValid
    ? "new-expense__control invalid"
    : "new-expense__control ";

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className={titleInputClasses}>
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
            onBlur={titleInputBlurHandler}
          />
          {titleInputIsInValid && (
            <p style={{ color: "red" }}>Title must not be empty.</p>
          )}
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
 */

//multiple input validation
/* import React, { useState, useEffect } from "react";

import "./ExpenseForm.css"; */

/* class ExpenseForm extends Component {
  constructor() {
    this.state = {
      enteredTitle: "",
    };
  }

  titleChangeHandler(event) {
    this.setState({ enteredTitle: event.target.value });
  }

  render() {
    return (
      <input
        type="text"
        value={this.state.enteredTitle}
        onChange={this.titleChangeHandler.bind(this)}
      />
    );
  }
} */

/* const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredTitleTouched, setEnteredTitleTouched] = useState(false);
  const [enteredAmountTouched, setEnteredAmountTouched] = useState(false);
  const [enteredDateTouched, setEnteredDateTouched] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false); */
// const [userInput, setUserInput] = useState({
//   enteredTitle: '',
//   enteredAmount: '',
//   enteredDate: '',
// });

/* const enteredTitleIsValid = enteredTitle.trim() !== "";
  const enteredAmountIsValid = enteredAmount.trim() !== "";
  const enteredDateIsValid = enteredDate.trim() !== "";
  const titleInputIsInValid = !enteredTitleIsValid && enteredTitleTouched;
  const amountInputIsInValid = !enteredAmountIsValid && enteredAmountTouched;
  const dateInputIsInValid = !enteredDateIsValid && enteredDateTouched; */

/* let formIsValid = false;

  if (enteredTitleIsValid && enteredAmountIsValid && enteredDateIsValid) {
    formIsValid = true;
  } */

/* useEffect(() => {
    if (enteredTitleIsValid && enteredAmountIsValid && enteredDateIsValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [enteredTitleIsValid, enteredAmountIsValid, enteredDateIsValid]);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value); */
// setUserInput({
//   ...userInput,
//   enteredTitle: event.target.value,
// });
// setUserInput((prevState) => {
//   return { ...prevState, enteredTitle: event.target.value };
// });
/* };

  const titleInputBlurHandler = (event) => {
    setEnteredTitleTouched(true);
  };

  const amountInputBlurHandler = (event) => {
    setEnteredAmountTouched(true);
  };

  const dateInputBlurHandler = (event) => {
    setEnteredDateTouched(true);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value); */
// setUserInput({
//   ...userInput,
//   enteredAmount: event.target.value,
// });
/* };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value); */
// setUserInput({
//   ...userInput,
//   enteredDate: event.target.value,
// });
/* };

  const submitHandler = (event) => {
    event.preventDefault();

    setEnteredTitleTouched(true);
    setEnteredAmountTouched(true);
    setEnteredDateTouched(true);

    if (!enteredTitleIsValid && !enteredAmountIsValid && !enteredDateIsValid) {
      return;
    }

    console.log(enteredTitle);

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");

    setEnteredTitleTouched(false);
    setEnteredAmountTouched(false);
    setEnteredDateTouched(false);
  };

  const titleInputClasses = titleInputIsInValid
    ? "new-expense__control invalid"
    : "new-expense__control ";

  const amountInputClasses = amountInputIsInValid
    ? "new-expense__control invalid"
    : "new-expense__control ";

  const dateInputClasses = dateInputIsInValid
    ? "new-expense__control invalid"
    : "new-expense__control ";

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className={titleInputClasses}>
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
            onBlur={titleInputBlurHandler}
          />
          {titleInputIsInValid && (
            <p style={{ color: "red" }}>Title must not be empty.</p>
          )}
        </div>
        <div className={amountInputClasses}>
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
            onBlur={amountInputBlurHandler}
          />
          {amountInputIsInValid && (
            <p style={{ color: "red" }}>Amount must not be empty.</p>
          )}
        </div>
        <div className={dateInputClasses}>
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
            onBlur={dateInputBlurHandler}
          />
          {dateInputIsInValid && (
            <p style={{ color: "red" }}>Date must not be empty.</p>
          )}
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit" disabled={!formIsValid}>
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm; */

import React from "react";

import "./ExpenseForm.css";
import useInput from "../../hooks/use-input";

/* class ExpenseForm extends Component {
  constructor() {
    this.state = {
      enteredTitle: "",
    };
  }

  titleChangeHandler(event) {
    this.setState({ enteredTitle: event.target.value });
  }

  render() {
    return (
      <input
        type="text"
        value={this.state.enteredTitle}
        onChange={this.titleChangeHandler.bind(this)}
      />
    );
  }
} */

const isNotEmpty = (value) => value.trim() !== "";

const ExpenseForm = (props) => {
  const {
    value: enteredTitle,
    isValid: enteredTitleIsValid,
    hasError: titleInputHasError,
    valueChangeHandler: titleChangeHandler,
    inputBlurHandler: titleBlurHandler,
    reset: resetTitleInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredAmount,
    isValid: enteredAmountIsValid,
    hasError: amountInputHasError,
    valueChangeHandler: amountChangeHandler,
    inputBlurHandler: amountBlurHandler,
    reset: resetAmountInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredDate,
    isValid: enteredDateIsValid,
    hasError: dateInputHasError,
    valueChangeHandler: dateChangeHandler,
    inputBlurHandler: dateBlurHandler,
    reset: resetDateInput,
  } = useInput((value) => value.trim() !== "");

  //const [formIsValid, setFormIsValid] = useState(false);
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  let formIsValid = false;

  if (enteredTitleIsValid && enteredAmountIsValid && enteredDateIsValid) {
    formIsValid = true;
  }

  /* useEffect(() => {
    if (enteredTitleIsValid && enteredAmountIsValid && enteredDateIsValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [enteredTitleIsValid, enteredAmountIsValid, enteredDateIsValid]); */

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    resetTitleInput();
    resetAmountInput();
    resetDateInput();
  };

  const titleInputClasses = titleInputHasError
    ? "new-expense__control invalid"
    : "new-expense__control ";

  const amountInputClasses = amountInputHasError
    ? "new-expense__control invalid"
    : "new-expense__control ";

  const dateInputClasses = dateInputHasError
    ? "new-expense__control invalid"
    : "new-expense__control ";

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className={titleInputClasses}>
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
            onBlur={titleBlurHandler}
          />
          {titleInputHasError && (
            <p style={{ color: "red" }}>Title must not be empty.</p>
          )}
        </div>
        <div className={amountInputClasses}>
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
            onBlur={amountBlurHandler}
          />
          {amountInputHasError && (
            <p style={{ color: "red" }}>Amount must not be empty.</p>
          )}
        </div>
        <div className={dateInputClasses}>
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
            onBlur={dateBlurHandler}
          />
          {dateInputHasError && (
            <p style={{ color: "red" }}>Date must not be empty.</p>
          )}
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit" disabled={!formIsValid}>
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;

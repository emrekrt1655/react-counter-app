import React from 'react';
import Counter from '../Counter';
import { cleanup, fireEvent, render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

let getByTestId;

beforeEach(() => {
    const component = render(<Counter />);
    getByTestId = component.getByTestId
})

afterEach(() => {
    cleanup();
})

test("header renders with correct text", () => {
    const headerEl = getByTestId("header");

    expect(headerEl.textContent).toBe("My Counter")
})


test("counter initially start with string of 0", () => {
    const counterEl = getByTestId("counter");

    expect(counterEl.textContent).toBe("0")
})

test("counter input initially start with string of 1", () => {
    const inputEl = getByTestId("input");

    expect(inputEl.value).toBe("1");
})

test("add button text should contain +", () => {
    const addBtn = getByTestId("addBtn");

    expect(addBtn.textContent).toBe("+")

})

test("subtract button text should contain - ", () => {
    const subBtn = getByTestId("subBtn");

    expect(subBtn.textContent).toBe("-")

})

test("change input value properly", () => {
    const inputEl = getByTestId("input");

    expect(inputEl.value).toBe("1")

    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    });

    expect(inputEl.value).toBe("5");
})

test("click add btn adds input-value to the counter", () => {
    const addBtnEl = getByTestId("addBtn");
    const counterEl = getByTestId("counter");
    const inputEl = getByTestId("input")
    
    expect(counterEl.textContent).toBe("0");

    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    })
    fireEvent.click(addBtnEl);

    expect(counterEl.textContent).toBe("5");

})

test("click subtract btn subtracts input-value from the counter", () => {
    const subBtnEl = getByTestId("subBtn");
    const counterEl = getByTestId("counter");
    const inputEl = getByTestId("input")
    
    expect(counterEl.textContent).toBe("0");
    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    })
    fireEvent.click(subBtnEl);

    expect(counterEl.textContent).toBe("-5");

})

test("input value changes and multiple add and sub buttons works and gives the correct answer ", () => {
    const addBtnEl = getByTestId("addBtn");
    const subBtnEl = getByTestId("subBtn");
    const counterEl = getByTestId("counter");
    const inputEl = getByTestId("input")

    expect(counterEl.textContent).toBe("0");

    fireEvent.change(inputEl, {
        target: {
            value: "20"
        }
    })
    fireEvent.click(addBtnEl);
    fireEvent.click(addBtnEl);
    fireEvent.click(addBtnEl);
    fireEvent.click(addBtnEl);
    fireEvent.click(subBtnEl);
    fireEvent.click(subBtnEl);

    expect(counterEl.textContent).toBe("40");

    fireEvent.change(inputEl, {
        target: {
            value: "10"
        }
    })

    fireEvent.click(addBtnEl);
    fireEvent.click(subBtnEl);
    fireEvent.click(addBtnEl);
    fireEvent.click(addBtnEl);
    fireEvent.click(addBtnEl);
    fireEvent.click(subBtnEl);

    expect(counterEl.textContent).toBe("60");

})


test('counterEl should correct classname', () => {
    const addBtnEl = getByTestId("addBtn");
    const subBtnEl = getByTestId("subBtn");
    const counterEl = getByTestId("counter");
    const inputEl = getByTestId("input")

    expect(counterEl.className).toBe("");

    fireEvent.change(inputEl, {
        target:{
            value: "50"
        }
    })

    fireEvent.click(addBtnEl)
    expect(counterEl.className).toBe("");

    fireEvent.click(addBtnEl);
    expect(counterEl.className).toBe("green");

    fireEvent.click(addBtnEl);
    expect(counterEl.className).toBe("green");

    fireEvent.click(subBtnEl);
    expect(counterEl.className).toBe("green");

    fireEvent.click(subBtnEl);
    expect(counterEl.className).toBe("");

    fireEvent.click(subBtnEl);
    expect(counterEl.className).toBe("");

    fireEvent.click(subBtnEl);
    expect(counterEl.className).toBe("");

    fireEvent.click(subBtnEl);
    expect(counterEl.className).toBe("red");

    fireEvent.click(subBtnEl);
    expect(counterEl.className).toBe("red");


})
import React from "react";
import { screen, render, fireEvent} from "@testing-library/react";
import App from "./App";

//https://testing-library.com/
//https://jestjs.io/docs/expect#tobedefined

describe('TestCalculadora', () =>{

    it("Verificamos que funcione bien la aplicación", () => {
        render(<App/>);
    });

    it("Verificamos que los botones del 1 al 9 funcionen", () => {
        render(<App/>);
        fireEvent.click(screen.getByText("1"));
        fireEvent.click(screen.getByText("2"));
        fireEvent.click(screen.getByText("3"));
        fireEvent.click(screen.getByText("4"));
        fireEvent.click(screen.getByText("5"));
        fireEvent.click(screen.getByText("6"));
        fireEvent.click(screen.getByText("7"));
        fireEvent.click(screen.getByText("8"));
        fireEvent.click(screen.getByText("9"));

        expect(screen.getByDisplayValue("123456789")).toBeDefined();
    });

    it("Verificamos que se pueda realizar una suma", () => {
        render(<App/>);
        fireEvent.click(screen.getByText("7"));
        fireEvent.click(screen.getByText("+"));
        fireEvent.click(screen.getByText("4"));
        fireEvent.click(screen.getByText("="));

        expect(screen.getByDisplayValue("11")).toBeDefined();
    });

    it("Verificamos que se pueda realizar una resta", () => {
        render(<App/>);
        fireEvent.click(screen.getByText("7"));
        fireEvent.click(screen.getByText("-"));
        fireEvent.click(screen.getByText("4"));
        fireEvent.click(screen.getByText("="));

        expect(screen.getByDisplayValue("3")).toBeDefined();
    });

    it("Verificamos que se pueda realizar una multiplicación", () => {
        render(<App/>);
        fireEvent.click(screen.getByText("7"));
        fireEvent.click(screen.getByText("x"));
        fireEvent.click(screen.getByText("4"));
        fireEvent.click(screen.getByText("="));

        expect(screen.getByDisplayValue("28")).toBeDefined();
    });

    it("Verificamos que se pueda realizar una división", () => {
        render(<App/>);
        fireEvent.click(screen.getByText("9"));
        fireEvent.click(screen.getByText("/"));
        fireEvent.click(screen.getByText("3"));
        fireEvent.click(screen.getByText("="));

        expect(screen.getByDisplayValue("3")).toBeDefined();
    });

    it("Verificamos que no se puedan ingresar mas de 9 numeros", () => {
        render(<App/>);
        fireEvent.click(screen.getByText("1"));
        fireEvent.click(screen.getByText("2"));
        fireEvent.click(screen.getByText("3"));
        fireEvent.click(screen.getByText("4"));
        fireEvent.click(screen.getByText("5"));
        fireEvent.click(screen.getByText("6"));
        fireEvent.click(screen.getByText("7"));
        fireEvent.click(screen.getByText("8"));
        fireEvent.click(screen.getByText("9"));
        fireEvent.click(screen.getByText("4"));
        expect(screen.getByDisplayValue("ERROR")).toBeDefined();
    });

    it("Verificamos que no se puede tener un resultado negativo", () => {
        render(<App/>);
        fireEvent.click(screen.getByText("4"));
        fireEvent.click(screen.getByText("-"));
        fireEvent.click(screen.getByText("7"));
        fireEvent.click(screen.getByText("="));

        expect(screen.getByDisplayValue("ERROR")).toBeDefined();
    });

    it("Verificamos que se pueda realizar una operacion con punto", () => {
        render(<App/>);
        fireEvent.click(screen.getByText("1"));
        fireEvent.click(screen.getByText("."));
        fireEvent.click(screen.getByText("5"));
        fireEvent.click(screen.getByText("+"));
        fireEvent.click(screen.getByText("3"));
        fireEvent.click(screen.getByText("."));
        fireEvent.click(screen.getByText("5"));
        fireEvent.click(screen.getByText("="));

        expect(screen.getByDisplayValue("5")).toBeDefined();
    });
});
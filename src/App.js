import React, {useState} from "react";
import {MyTextArea} from "./Components/MyTextarea/MyTextArea";


function App() {

    const codeText = () => {
        const leftdivclass = document.querySelector('.leftdivclass');
        const textarrdivleft = [];
        for (const el in Array.from(leftdivclass.childNodes?.valueOf())) {
            textarrdivleft.push(Array.from(leftdivclass.childNodes?.valueOf())[el].textContent);
        }

        const rightdivclass = document.querySelector('.rightdivclass');
        const textarrdivright = [];
        for (const el in Array.from(rightdivclass.childNodes?.valueOf())) {
            textarrdivright.push(Array.from(rightdivclass.childNodes?.valueOf())[el].textContent);
        }


        const divreplacefirstchleft = document.createElement('div');
        divreplacefirstchleft.innerText = textarrdivleft[0];
        leftdivclass.childNodes[0]?.replaceWith(divreplacefirstchleft);

        const divreplacefirstchright = document.createElement('div');
        divreplacefirstchright.innerText = textarrdivright[0];
        rightdivclass.childNodes[0]?.replaceWith(divreplacefirstchright);


        for (let i = 0; i < textarrdivleft.length; i++) {
            leftdivclass.childNodes[i].setAttribute("style", "background-color: red");
        }
        for (let i = 0; i < textarrdivleft.length; i++) {
            for (let j = 0; j < textarrdivright.length; j++) {
                if (textarrdivleft[i] === textarrdivright[j]) {
                    leftdivclass.childNodes[i].setAttribute("style", "background-color: green");
                }
            }
        }
        for (let i = 0; i < textarrdivright.length; i++) {
            rightdivclass.childNodes[i].setAttribute("style", "background-color: red");
        }
        for (let i = 0; i < textarrdivright.length; i++) {
            for (let j = 0; j < textarrdivleft.length; j++) {
                if (textarrdivright[i] === textarrdivleft[j]) {
                    rightdivclass.childNodes[i].setAttribute("style", "background-color: green");
                }
            }
        }

    }
    const styledivconte = {
        'display':'inline-flex',
        'flexDirection':'row'
    }
    const stylemytextarea = {
        'width': '400px',
        'height': '200px',
        'border': '1px solid #999',
        'padding': '2px',
        'resize': 'none',
        'margin': '15px',
        'overflow': 'scroll',
        'wordWrap': 'normal'
    }
    const stylebutton = {
        'display': 'flex',
        'margin': '15px',
    }

    return (
        <div>
            <MyTextArea
                stylevaluecontein={styledivconte}
                stylevalue={stylemytextarea}
                divclassname={'leftdivclass'}
            />
            <MyTextArea
                stylevaluecontein={styledivconte}
                stylevalue={stylemytextarea}
                divclassname={'rightdivclass'}
            />
            <button
                style={stylebutton}
                onClick={codeText}
            >Сравнить текст
            </button>
        </div>
    )
}

export default App;

import React from "react";

// HOMEWORK 1
const person = {
    name: "Thorfinn",
    imgUrl: "https://u.to/iS89IA",
    imgSize: 140
}
export default function Information() {
    return (
        <>
            <h1>{person.name}</h1>
            <img className="VinlandSaga" src={person.imgUrl} alt={'Photo of' + person.name}
                 style={{width: person.imgSize, height: person.imgSize}}/>
        </>
    )
}

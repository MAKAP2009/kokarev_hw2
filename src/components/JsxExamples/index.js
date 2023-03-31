import React from "react";
// import Img from 

class JsxExamples extends React.Component {
    render() {
        //js-code
        const stringOne = 'Перший рядок тексту';
        const stringTwo = 'Другий рядок тексту';

        return (
            <div>
                <div>
                    {<h3>{stringOne}</h3>}
                </div>

                <div>
                    {<h3>{stringTwo}</h3>}
                </div>
            </div>

            
        )
    }
}

export default JsxExamples;
import React from 'react'

export default function ReportCard() {
    return (
        <div>
            <section id="ReportCard">
                    <header>
                        <h1>Practice Exercise 1</h1>
                        <h2>STUDENT REPORT CARD</h2>
                    </header>
                    <table border="3px">
                        <caption></caption> 
                        <thead>
                            <tr  style={{height: "70px"}}>   
                                <td colSpan={3} style={{textAlign: "center"}} >Student Report Card</td>
                            </tr>
                            <tr style={{height: "40px"}}>
                                <td colSpan={3}>Student Name: Charmi Jadawala</td>
                            </tr>
                            <tr>
                                <td colSpan={2}>Roll No.: 161713</td>
                                <td colSpan={1}>Year of Passing: 2018</td>
                            </tr>
                            <tr>
                                <td>Subjects</td>                   
                                <td>Marks</td>
                                <td>Grades</td>
                            </tr>
                        </thead>  
                        <tbody>
                            <tr>
                                <td>Maths</td>
                                <td>92</td>
                                <td>AA</td>               
                            </tr>
                            <tr>
                                <td>Science</td>
                                <td>84</td>
                                <td>AB</td>               
                            </tr>
                            <tr>
                                <td>Social Studies</td>
                                <td>86</td>
                                <td>AA</td>               
                            </tr>
                            <tr>
                                <td>English</td>
                                <td>80</td>
                                <td>AB</td>               
                            </tr>
                            <tr>
                                <td>Gujarati</td>
                                <td>74</td>
                                <td>BB</td>               
                            </tr>
                            <tr>
                                <td>Computer</td>
                                <td>96</td>
                                <td>AA</td>               
                            </tr>
                        </tbody>       
                        <tfoot>
                            <tr>
                                <td>SPI: 9.04</td>
                                <td>CPI: 9.40</td>
                                <td>CGPA: 9.52</td>
                            </tr>
                            <tr>
                                <td colSpan={3} style={{height: "30px", textAlign: "center"}}>Status: PASS</td>
                            </tr>
                        </tfoot>
                    </table>
            </section> 
        </div>
    )
}

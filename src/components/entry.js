import React from 'react';
import axios from 'axios';
import { Divider, InputField, SingleSelectField, SingleSelectOption, FieldGroup, ButtonStrip, Button } from '@dhis2/ui';

export default class Entry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orgUnit: 'VP Daisoli 1',
            dataSet: '1',
            dataSetPeriod: '2021-03-14',
            vaccineProd: '',
            chcDosesDispatched: '0',
            dosesReceived: '0',
            fDoseM: '0',
            fDoseF: '0',
            sDoseM: '0',
            sDoseF: '0',
            totVaccinated: '0',
            dosesDiscarded: '0',
            dosesReturned: '0',
            aefiReportedM: '0',
            aefiReportedF: '0'
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }
    
    handleSubmit(event) {
        event.preventDefault();
        // console.log(this.state);

        const options = {
            url: 'https://tlhis-epi.org/test2',
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json;charset=UTF-8'
            },
            auth: {
                username: 'dev',
                password: 'Test123#'
            },
            data: this.state
        };

        axios(options)
            .then(response => {
                console.log(response);
        });
    }

    nextYear() {
        console.log('Next year...');
    }

    prevYear() {
        console.log('Prev year...');
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <div style={{padding:"1rem", backgroundColor:"#cccccc", marginBottom:"1rem"}}>
                        <InputField
                            disabled
                            label="Organization Unit"
                            name="orgUnit"
                            value={this.state.orgUnit}
                            onChange={this.handleInputChange}
                        />

                        <SingleSelectField
                            label="Data Set"
                            className="dataSet"
                            value={this.state.dataSet}
                            selected={this.state.dataSet}
                            onChange={this.handleInputChange}
                        >
                            <SingleSelectOption
                                label="COVID19 Vaccine - Vaccination Post Daily Return"
                                value="1"
                            />
                            <SingleSelectOption
                                label="Option 2"
                                value="2"
                            />
                            <SingleSelectOption
                                label="Option 3"
                                value="3"
                            />
                        </SingleSelectField>                            

                        <SingleSelectField
                            label="Period"
                            className="dataSetPeriod"
                            value={this.state.dataSetPeriod}
                            selected={this.state.dataSetPeriod}
                            onChange={this.handleInputChange}
                        >
                            <SingleSelectOption
                                label="2021-03-14"
                                value="2021-03-14"
                            />
                            <SingleSelectOption
                                label="2021-03-13"
                                value="2021-03-13"
                            />
                            <SingleSelectOption
                                label="2021-03-12"
                                value="2021-03-12"
                            />
                        </SingleSelectField>

                        <Button name="prevYear" onClick={this.prevYear}>
                            Prev Year
                        </Button>

                        <Button name="nextYear" onClick={this.nextYear}>
                            Next Year
                        </Button>

                    </div>
                    
                    <ButtonStrip middle>
                        <Button>
                            Run Validation
                        </Button>
                        <Button>
                            Print Form
                        </Button>
                        <Button>
                            Print Blank Form
                        </Button>
                    </ButtonStrip>

                    <Divider margin="10px 0" />

                    <h3>COVID19 Vaccine Daily Return - from Vaccination Post</h3>
                    <h4 style={{color:"#a0a0a0", marginTop:"0"}}>(This should be filled at the end of each vaccination session)</h4>

                    <Divider />


                    <div style={{'padding':'1rem'}}>
                        <SingleSelectField
                            label="Vaccine Product"
                            className="vaccineProd"
                            value={this.state.vaccineProd}
                            onChange={this.handleInputChange}
                        >
                            <SingleSelectOption
                                label="Comirnaty Vaccine"
                                value="BNT162b2"
                            />
                            <SingleSelectOption
                                label="Moderna Vaccine"
                                value="mRNA-1273"
                            />
                            <SingleSelectOption
                                label="AstraZeneca Vaccine"
                                value="AZD1222"
                            />
                            <SingleSelectOption
                                label="Janssen Vaccine"
                                value="JNJ-78436735"
                            />
                        </SingleSelectField>

                        <InputField
                            label="No. of Doses Dispatched from CHC Vaccine Store today"
                            disabled
                            name="chcDosesDispatched"
                            value={this.state.chcDosesDispatched}
                            onChange={this.handleInputChange}
                        />

                        <InputField
                            label="No. of Doses Received today"
                            name="dosesReceived"
                            value={this.state.dosesReceived}
                            onChange={this.handleInputChange}
                        />

                        <h5>No. Vaccinated Today</h5>

                        <FieldGroup label="First Dose">
                            <InputField
                                label="Male"
                                name="fDoseM"
                                value={this.state.fDoseM}
                                onChange={this.handleInputChange}
                            />

                            <InputField
                                label="Female"
                                name="fDoseF"
                                value={this.state.fDoseF}
                                onChange={this.handleInputChange}
                            />
                        </FieldGroup>
                        
                        <div style={{marginTop:"1rem"}}></div>

                        <FieldGroup label="Second Dose">
                            <InputField
                                label="Male"
                                name="sDoseM"
                                value={this.state.sDoseM}
                                onChange={this.handleInputChange}
                            />

                            <InputField
                                label="Female"
                                name="sDoseF"
                                value={this.state.sDoseF}
                                onChange={this.handleInputChange}
                            />
                        </FieldGroup>

                        <InputField
                            label="Total"
                            disabled
                            name="totVaccinated"
                            value={this.state.totVaccinated}
                            onChange={this.handleInputChange}
                        />

                        <div style={{marginTop:"2.5rem"}}></div>
                        
                        <InputField
                            label="No. of Doses Discarded today"
                            name="dosesDiscarded"
                            value={this.state.dosesDiscarded}
                            onChange={this.handleInputChange}
                        />
                        
                        <InputField
                            label="No. of Doses Returned today"
                            name="dosesReturned"
                            value={this.state.dosesReturned}
                            onChange={this.handleInputChange}
                        />
                        
                        <div style={{marginTop:"2.5rem"}}></div>

                        <FieldGroup label="No. of AEFIs Reported Today">
                            <InputField
                                label="Male"
                                name="aefiReportedM"
                                value={this.state.aefiReportedM}
                                onChange={this.handleInputChange}
                            />

                            <InputField
                                label="Female"
                                name="aefiReportedF"
                                value={this.state.aefiReportedF}
                                onChange={this.handleInputChange}
                            />
                        </FieldGroup>
                   
                    <ButtonStrip middle>
                        <Button type="submit">
                            Submit
                        </Button>
                    </ButtonStrip>
                        
                    </div>
                </form>
            </>
        )
    }
}
import { Component } from "react";
import promotion from "../../../../images/promotion.jpg";

import './style.css';
import Select from "../../../forms/select";
import Text from "../../../forms/text";
import Button from "../../../forms/button";

class NewPromotion extends Component {

    constructor(props) {
        super(props);
        if (!!props.changeRequest) {
            this.state = {
                id: props.changeRequest.id,
                project: props.changeRequest.project,
                version: props.changeRequest.version,
                type: props.changeRequest.type,
                reason: props.changeRequest.reason,
            }
        } else {
            this.state = {
                project: '',
                version: '',
                type: '',
                reason: ''
            }
        }
    }

    onChangeProject = (project) => {
        this.setState({ project: project })
    }

    onChangeVersion = (version) => {
        this.setState({ version: version })
    }
    onChangeType = (type) => {
        this.setState({ type })
    }

    onChangeReason = (reason) => {
        this.setState({ reason })
    }

    createNew = () => {
        console.log("State is:")
        console.log(this.state);
    }

    render() {
        const { project, version, type, reason } = this.state;
        return (
            <div className="EditChangeRequest">
                <img src={promotion} className="App-logo" alt="logo" />
                <p>
                    Informe abaixo os detalhes do micro serviço a ser promovido.
                </p>
                <br/>
                Projeto: <Select options={['/gif-odete/backend/projeto-exemplo', '/tools/pipeline-events']} selected={project} onChange={this.onChangeProject} allowEmpty={false} unselectedLabel="-- Selecione --" /><br/>
                Versão: <Select options={['1.0.1', '1.0.2']} selected={version} onChange={this.onChangeVersion} allowEmpty={false} unselectedLabel="-- Selecione --" /><br/>
                Tipo: <Select options={['regular', 'emergencial']} selected={type} onChange={this.onChangeType} allowEmpty={false} unselectedLabel="-- Selecione --" /><br/>
                Motivo: <Text value={reason} placeholder="Descrição curta da motivação" onChange={this.onChangeReason}/><br/>
                <br/>
                <Button value="Enviar" onClick={this.createNew}/>
            </div>
        );
    }
}

export default NewPromotion;

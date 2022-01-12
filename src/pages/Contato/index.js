import React from "react";
import "../../css/contato.css";
import Menu from "../Layouts/menu";

export default function Contato()
{
    return(
        <div>

            <Menu/>

            <div id="formulario">

                <h1 id="h1-faleConosco">Fale Conosco</h1>

                <form method="POST" action="#">

                    <div class="dados">
                        <label><span class="obrigatorio">*</span>Nome:</label>
                        <input size="large" class="input" placeholder="Nome Completo" required/>
                    </div>
                    <div class="dados">
                        <label><span class="obrigatorio">*</span>Endereço:</label>
                        <input size="large" class="input" placeholder="Endereço Completo" required/>
                    </div>
                    <div class="dados">
                        <label><span class="obrigatorio">*</span>Email:</label>
                        <input size="large" class="input" placeholder="email@email.com" required/>
                    </div>
                    <div id="select">
                        <label>Tipo:</label>
                        <select name="select">
                            <option value="sugestoes" selected>Sugestões</option>
                            <option value="reclamacoes">Reclamações</option>
                            <option value="elogios">Elogios</option>
                        </select>
                    </div>
                    <div>
                        <div id="msg">
                            <label>Mensagem</label>
                        </div>
                        <div>
                            <textArea rows={10} cols={50} />
                        </div>
                    </div>
                    <button>Enviar</button>
                </form>
            </div>
        </div>
    );
};
import React from "react";
import { Contato } from "../services/contatos";
import {View, Text} from "react-native"
import styles from "../estilos/main"

const Detalhes: React.FC<Contato> = (contato) => {
    return (
        <view style={styles.container}>
            <Text style={styles.text}></Text>{contato.nome}</text>
            <Text style={styles.text}></Text>{contato.email}</text>
            <Text style={styles.text}></Text>{contato.telefone}</text>
            <Text style={styles.text}></Text>{contato.endereco}</text>
        </view>
    )
}
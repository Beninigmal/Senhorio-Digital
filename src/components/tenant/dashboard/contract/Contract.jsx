import React from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";
import User from '../user/User'

function Contract({cpfUser}) {
  const useStyles = makeStyles({
    root: {
      marginTop: "64px",
    },
    text: {
      textAlign: "justify",
      fontFamily: "Roboto",
    },
  });
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Typography variant="h2">Contrato de Aluguel <br /></Typography>
      <Typography paragraph variant="body1" className={classes.text}>
        LOCADOR: Luis Pereira, brasileiro, casado, aposentado,
        portador da cédula de identidade R.G. nº1111111111 e CPF/MF nº22222222222.
        LOCATÁRIO: (Nome), (nacionalidade), (estado civil), (profissão),
        portador da cédula de identidade R.G. nº xxxxxxxxx, e CPF/MF nº
        xxxxxxxx.
        <br />
        CLÁUSULA PRIMEIRA: O objeto deste contrato de locação é o imóvel
        residencial, situado à rua Presidente Medice, 3, Águas Claras,
        41310-000, Salvador, Bahia.
        <br />
        <br />
        CLÁUSULA SEGUNDA: O prazo da locação é de 12 meses, iniciando-se em
        xx/xx/xx com término em xx/xx/xx, independentemente e aviso, notificação
        ou interpelação judicial ou mesmo extrajudicial.
        <br />
        <br />
        CLÁUSULA TERCEIRA: O aluguel mensal, deverá ser pago até o dia 10 (dez)
        do mês subseqüente ao vencido, no local indicado pelo LOCADOR, é de R$
        450,00 (Quatrocentos e cinquenta reais) mensais, reajustados anualmente,
        de conformidade com a variação do IGP-M apurada no ano anterior, e na
        sua falta, por outro índice criado pelo Governo Federal e, ainda, em sua
        substituição, pela Fundação Getúlio Vargas, reajustamento este sempre
        incidente e calculado sobre o último aluguel pago no último mês do ano
        anterior.
        <br />
        <br />
        CLÁUSULA QUARTA: O LOCATÁRIO será responsável por todos os tributos
        incidentes sobre o imóvel bem como despesas ordinárias de condomínio, e
        quaisquer outras despesas que recaírem sobre o imóvel, arcando tambem
        com as despesas provenientes de sua utilização seja elas, ligação e
        consumo de luz, força, água e gás que serão pagas diretamente às
        empresas concessionárias dos referidos serviços.
        <br />
        <br />
        CLÁUSULA QUINTA: Em caso de mora no pagamento do aluguel, será aplicada
        multa de 2% (dois por cento) sobre o valor devido e juros mensais de 1%
        (um por cento) do montante devido.
        <br />
        <br />
        CLÁUSULA SEXTA: Fica ao LOCATÁRIO, a responsabilidade em zelar pela
        conservação, limpeza do imóvel, efetuando as reformas necessárias para
        sua manutenção sendo que os gastos e pagamentos decorrentes da mesma,
        correrão por conta do mesmo. O LOCATÁRIO está obrigado a devolver o
        imóvel em perfeitas condições de limpeza, conservação e pintura, quando
        finda ou rescindida esta avença, conforme constante no termo de vistoria
        em anexo. O LOCATÁRIO não poderá realizar obras que alterem ou
        modifiquem a estrutura do imóvel locado, sem prévia autorização por
        escrito da LOCADORA. Caso este consinta na realização das obras, estas
        ficarão desde logo, incorporadas ao imóvel, sem que assista ao LOCATÁRIO
        qualquer indenização pelas obras ou retenção por benfeitorias. As
        benfeitorias removíveis poderão ser retiradas, desde que não desfigurem
        o imóvel locado.
        <br />
        <br />
        PARÁGRAFO ÚNICO: O LOCATÁRIO declara receber o imóvel em perfeito estado
        de conservação e perfeito funcionamento devendo observar o que consta no
        termo de vistoria.
        <br />
        <br />
        CLÁUSULA SÉTIMA: O LOCATÁRIO declara, que o imóvel ora locado,
        destina-se única e exclusivamente para o seu uso residencial e de sua
        família.
        <br />
        <br />
        PARÁGRAFO ÚNICO: O LOCATÁRIO, obriga por si e sua família, a cumprir e a
        fazer cumprir integralmente as disposições legais sobre o Condomínio, a
        sua Convenção e o seu Regulamento Interno.
        <br />
        <br />
        CLÁUSULA OITAVA: O LOCATÁRIO não poderá sublocar, transferir ou ceder o
        imóvel, sendo nulo de pleno direito qualquer ato praticado com este fim
        sem o consentimento prévio e por escrito do LOCADOR.
        <br />
        <br />
        CLÁUSULA NONA: Em caso de sinistro parcial ou total do prédio, que
        impossibilite a habitação o imóvel locado, o presente contrato estará
        rescindido, independentemente de aviso ou interpelação judicial ou
        extrajudicial; no caso de incêndio parcial, obrigando a obras de
        reconstrução, o presente contrato terá suspensa a sua vigência e
        reduzida a renda do imóvel durante o período da reconstrução à metade do
        que na época for o aluguel, e sendo após a reconstrução devolvido o
        LOCATÁRIO pelo prazo restante do contrato, que ficará prorrogado pelo
        mesmo tempo de duração das obras de reconstrução.
        <br />
        <br />
        CLÁUSULA DÉCIMA : Em caso de desapropriação total ou parcial do imóvel
        locado, ficará rescindido de pleno direito o presente contrato de
        locação, independente de quaisquer indenizações de ambas as partes ou
        contratantes.
        <br />
        <br />
        CLÁUSULA DÉCIMA PRIMEIRA: Falecendo o FIADOR, o LOCATÁRIO, em 30
        (trinta) dias, dar substituto idôneo que possa garantir o valor locativo
        e encargos do referido imóvel, ou prestar seguro fiança de empresa
        idônea.
        <br />
        <br />
        CLÁUSULA DÉCIMA SEGUNDA: No caso de alienação do imóvel, obriga-se o
        LOCADOR, dar preferência ao LOCATÁRIO, e se o mesmo não utilizar-se
        dessa prerrogativa, o LOCADOR deverá constar da respectiva escritura
        pública, a existência do presente contrato, para que o adquirente o
        respeite nos termos da legislação vigente.
        <br />
        <br />
        CLÁUSULA DÉCIMA TERCEIRA: O FIADOR e principal pagador do LOCATÁRIO,
        responde solidariamente por todos os pagamentos descritos neste contrato
        bem como, não só até o final de seu prazo, como mesmo depois, até a
        efetiva entrega das chaves ao LOCADOR e termo de vistoria do imóvel.
        <br />
        <br />
        CLÁUSULA DÉCIMA QUARTA: È facultado ao LOCADOR vistoriar, por si ou seus
        procuradores, sempre que achar conveniente, para a certeza do
        cumprimento das obrigações assumidas neste contrato.
        <br />
        <br />
        CLÁUSULA DÉCIMA QUINTA: A infração de qualquer das cláusulas do presente
        contrato, sujeita o infrator à multa de duas vezes o valor do aluguel,
        tomando-se por base, o último aluguel vencido.
        <br />
        <br />
        CLÁUSULA DÉCIMA SEXTA: As partes contratantes obrigam-se por si,
        herdeiros e/ou sucessores, elegendo o Foro da Cidade do (colocar o fórum
        do município), para a propositura de qualquer ação.
        <br />
        <br />
        E, por assim estarem justos e contratados, mandaram extrair o presente
        instrumento em três (03) vias, para um só efeito, assinando-as,
        juntamente com as testemunhas, a tudo presentes.
      </Typography>
    </Container>
  );
}

export default Contract;

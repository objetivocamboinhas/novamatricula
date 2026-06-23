# Documentação de Variáveis — Ficha de Matrícula

Todas as variáveis abaixo são preenchidas pelo formulário e inseridas no documento DOCX gerado.
No template Word, use a sintaxe `{{nome_da_variavel}}` para cada campo.

---

## 1. Dados da Matrícula

| Variável | Descrição |
|---|---|
| `ano` | Ano letivo (ex.: 2026) |
| `getdate` | Data de preenchimento |
| `segmento` | Segmento escolar (Educação Infantil, Fundamental I, II, Médio) |
| `turma` | Série / turma (ex.: 3º ANO) |
| `TURNO` | Turno (Manhã, Tarde, Integral) |
| `TIPO` | Tipo de matrícula (ex.: Matrícula Nova) |
| `dependência` | Dependência (Sim / Não) |
| `Dependenciamateria` | Matéria da dependência |

---

## 2. Aluno

| Variável | Descrição |
|---|---|
| `aluno_nomealuno` | Nome completo do aluno |
| `aluno_cpf` | CPF do aluno |
| `aluno_sexo` | Sexo (Feminino / Masculino) |
| `aluno_dtnascimento` | Data de nascimento (formato dd/mm/aaaa no doc) |
| `aluno_rg` | RG do aluno |
| `aluno_rgemissao` | Data de emissão do RG |
| `aluno_rgexpedidor` | Órgão expedidor do RG |
| `aluno_nacionalidade` | Nacionalidade |
| `aluno_email` | E-mail do aluno |
| `aluno_residencial` | Telefone residencial |
| `aluno_cel` | Celular |
| `aluno_escoladeorigem` | Escola de origem |
| `aluno_reside` | Reside com (ex.: Pais, Mãe, Pai...) |
| `aluno_irmao` | Tem irmão na escola? (Sim / Não) |
| `aluno_irmaoqt` | Quantidade de irmãos na escola |
| `aluno_turmairmao` | Turma do irmão |

### Endereço do Aluno

| Variável | Descrição |
|---|---|
| `aluno_cep` | CEP |
| `aluno_uf` | Estado (UF) |
| `aluno_cidade` | Cidade |
| `aluno_bairro` | Bairro |
| `aluno_endereco` | Endereço (logradouro) |
| `numero` | Número |
| `aluno_complemento` | Complemento |

---

## 3. Mãe (Filiação 1)

| Variável | Descrição |
|---|---|
| `f1_nome` | Nome da mãe |
| `f1_email` | E-mail |
| `f1_dtnascimento` | Data de nascimento |
| `f1_nacionalidade` | Nacionalidade |
| `f1_cpf` | CPF |
| `f1_rg` | RG |
| `f1_civil` | Estado civil |
| `f1_ocupacao` | Ocupação |
| `f1_cel` | Celular |
| `f1_residencial` | Telefone residencial |
| `f1_comercial` | Telefone comercial |
| `f1_cep` | CEP |
| `f1_uf` | UF |
| `f1_municipio` | Município |
| `f1_bairro` | Bairro |
| `f1_endereco` | Endereço |
| `f1_complemento` | Complemento |

---

## 4. Pai (Filiação 2)

| Variável | Descrição |
|---|---|
| `f2_nome` | Nome do pai |
| `f2_email` | E-mail |
| `f2_dtnascimento` | Data de nascimento |
| `f2_nacionalidade` | Nacionalidade |
| `f2_cpf` | CPF |
| `f2_rg` | RG |
| `f2_civil` | Estado civil |
| `f2_ocupacao` | Ocupação |
| `f2_cel` | Celular |
| `f2_residencial` | Telefone residencial |
| `f2_comercial` | Telefone comercial |
| `f2_cep` | CEP |
| `f2_uf` | UF |
| `f2_municipio` | Município |
| `f2_bairro` | Bairro |
| `f2_endereco` | Endereço |
| `f2_complemento` | Complemento |

---

## 5. Responsável Financeiro

| Variável | Descrição |
|---|---|
| `respf_nome` | Nome |
| `respf_cpf` | CPF |
| `respf_sexo` | Sexo |
| `respf_dtnascimento` | Data de nascimento |
| `respf_rg` | RG |
| `respf_dtemissao` | Data de emissão do RG |
| `respf_expedidor` | Expedidor |
| `respf_nacionalidade` | Nacionalidade |
| `respf_estadocivil` | Estado civil |
| `respf_ocupacao` | Ocupação |
| `respf_parentesco` | Grau de parentesco |
| `respf_email` | E-mail |
| `respf_residencial` | Telefone residencial |
| `respf_cel` | Celular |
| `respf_cep` | CEP |
| `respf_uf` | Estado |
| `respf_cidade` | Cidade |
| `respf_bairro` | Bairro |
| `respf_endereco` | Endereço |
| `respf_numero` | Número |
| `respf_complemento` | Complemento |

---

## 6. Responsável Acadêmico

| Variável | Descrição |
|---|---|
| `respa_nome` | Nome |
| `respa_cpf` | CPF |
| `respa_sexo` | Sexo |
| `respa_dtnascimento` | Data de nascimento |
| `respa_rg` | RG |
| `respa_dtemissao` | Data de emissão do RG |
| `respa_expedidor` | Expedidor |
| `respa_ocupacao` | Ocupação |
| `respa_parentesco` | Grau de parentesco |
| `respa_email` | E-mail |
| `respa_residencial` | Telefone residencial |
| `respa_cel` | Celular |
| `respa_cep` | CEP |
| `respa_uf` | Estado |
| `respa_cidade` | Cidade |
| `respa_bairro` | Bairro |
| `respa_endereco` | Endereço |
| `respa_numero` | Número |
| `respa_complemento` | Complemento |

---

## 7. Autorização de Uso de Imagem

| Variável | Descrição |
|---|---|
| `autorizacao_imagem` | Autorização de uso de imagem (`Autorizo` / `Não Autorizo`) |

---

## 8. Autorização de Saída

| Variável | Descrição |
|---|---|
| `SAIDA` | Tipo de saída autorizada |
| `autoriza1` | Nome do autorizado 1 |
| `autoriza1p` | Parentesco do autorizado 1 |
| `autoriza1cpf` | CPF do autorizado 1 |
| `autoriza1tel` | Telefone do autorizado 1 |
| `autoriza2` | Nome do autorizado 2 |
| `autoriza2p` | Parentesco do autorizado 2 |
| `autoriza2cpf` | CPF do autorizado 2 |
| `autoriza2tel` | Telefone do autorizado 2 |
| `autoriza3` | Nome do autorizado 3 |
| `autoriza3p` | Parentesco do autorizado 3 |
| `autoriza3cpf` | CPF do autorizado 3 |
| `autoriza3tel` | Telefone do autorizado 3 |

### Transporte escolar

| Variável | Descrição |
|---|---|
| `condução_nome` | Empresa de transporte |
| `condução_condutor` | Nome do condutor |
| `condução_cpf` | CPF do condutor |
| `condução_aux` | Nome do auxiliar |
| `condução_cpfaux` | CPF do auxiliar |

---

## 8. Saúde — Dados Básicos

| Variável | Descrição |
|---|---|
| `aluno_tiposg` | Tipo sanguíneo (ex.: O+) |
| `fatorRH` | Fator RH |
| `aluno_planodesaude` | Plano de saúde |
| `aluno_planonumero` | Nº da carteira do plano |
| `aluno_medico` | Médico responsável pelo aluno(a) |
| `aluno_medicotel` | Telefone do médico |

### Contatos de emergência

| Variável | Descrição |
|---|---|
| `parentesco1_nome` | Nome do contato de emergência 1 |
| `parentesco1_tipo` | Parentesco do contato 1 |
| `parentesco1_tel` | Telefone do contato 1 |
| `parentesco2_nome` | Nome do contato de emergência 2 |
| `parentesco2_tipo` | Parentesco do contato 2 |
| `parentesco2_cel` | Telefone do contato 2 |

---

## 9. Saúde — Termo de Declaração (11 itens)

### Item 1 — Febre

| Variável | Descrição |
|---|---|
| `aluno_febre` | Remédio a ministrar em caso de febre alta |
| `aluno_febreremedio` | Dosagem do remédio para febre |

### Item 2 — Medicamentos *(campo complementar aparece somente se "Sim")*

| Variável | Descrição |
|---|---|
| `medicamentosn` | Faz uso regular de algum medicamento? (Sim / Não) |
| `aluno_medicamento` | Qual(is) remédio(s) — **visível somente quando Sim** |

### Item 3 — Tratamento médico *(campo complementar aparece somente se "Sim")*

| Variável | Descrição |
|---|---|
| `tratamentosn` | Faz algum tipo de tratamento médico? (Sim / Não) |
| `tratamento_qual` | Qual(is) tratamento(s) — **visível somente quando Sim** |

### Item 4 — Alergia *(campo complementar aparece somente se "Sim")*

| Variável | Descrição |
|---|---|
| `alergicosn` | É alérgico(a)? (Sim / Não) |
| `ALERGICO_TEXTO` | Especificar alergia — **visível somente quando Sim** |

### Item 5 — Doenças contagiosas *(checkboxes aparecem somente se "Sim")*

| Variável | Descrição |
|---|---|
| `doencascontagiosassn` | Já contraiu alguma dessas doenças? (Sim / Não) |
| `doencas_caxumba` | Caxumba (true/false) |
| `doencas_caxumba` | Sarampo (true/false) |
| `doencas_catapora` | Catapora (true/false) |
| `doencas_rubeola` | Rubéola (true/false) |
| `doencas_coqueluche` | Coqueluche (true/false) |
| `doencas_escarlatina` | Escarlatina (true/false) |
| `doencas_meningite` | Meningite (true/false) |
| `doencas_outras` | Outras doenças contagiosas |
| `doencas_quando` | Quando contraiu |

### Item 6 — Doença congênita *(campo complementar aparece somente se "Sim")*

| Variável | Descrição |
|---|---|
| `doencacongeniasn` | Possui doença congênita? (Sim / Não) |
| `doencacongenita_qual` | Qual doença congênita — **visível somente quando Sim** |

### Item 7 — Doenças crônicas *(checkboxes aparecem somente se "Sim")*

| Variável | Descrição |
|---|---|
| `doencacroniasn` | Possui alguma doença crônica? (Sim / Não) |
| `cronica_hipertensao` | Hipertensão (true/false) |
| `cronica_epilepsia` | Epilepsia (true/false) |
| `cronica_hemofilia` | Hemofilia (true/false) |
| `cronica_asma` | Asma (true/false) |
| `cronica_reumatismo` | Reumatismo (true/false) |
| `cronica_celiaca` | Doença Celíaca (true/false) |
| `cronica_diabetes` | Diabetes (true/false) |
| `epilepsia_tratamentosn` | Epilepsia — faz tratamento? (Sim / Não) |
| `insulinasn` | Diabetes — dependente de insulina? (Sim / Não) |
| `cronica_outras` | Outras doenças crônicas |

### Item 8 — Condições especiais *(checkboxes aparecem somente se "Sim")*

| Variável | Descrição |
|---|---|
| `condicaoespecialsn` | Apresenta alguma condição especial? (Sim / Não) |
| `condicao_autismo` | Autismo (true/false) |
| `condicao_tdah` | Déficit de Atenção / TDAH (true/false) |
| `condicao_dislexia` | Dislexia (true/false) |
| `condicao_hiperatividade` | Hiperatividade (true/false) |
| `condicao_defauditiva` | Deficiência Auditiva (true/false) |
| `condicao_defvisual` | Deficiência Visual (true/false) |
| `condicao_deffisica` | Deficiência Física (true/false) |
| `condicao_outras` | Outras condições (true/false) |
| `condicao_especificar` | Especificar condição — **visível somente quando Sim** |

### Item 9 — Atendimentos *(checkboxes aparecem somente se "Sim")*

| Variável | Descrição |
|---|---|
| `atendimentosn` | Faz algum desses atendimentos? (Sim / Não) |
| `atendimento_fono` | Fonoaudiológico (true/false) |
| `atendimento_psico` | Psicológico (true/false) |
| `atendimento_neuro` | Neurológico (true/false) |
| `atendimento_outros` | Outros atendimentos (true/false) |
| `atendimento_outros` | Especificar outros atendimentos (texto) |
| `atendimento_tempo` | Há quanto tempo realiza o atendimento |

### Item 10 — Outras informações

| Variável | Descrição |
|---|---|
| `saude_outras_info` | Outras informações consideradas importantes pelo Responsável |

### Item 11 — Hospital preferencial

| Variável | Descrição |
|---|---|
| `hospital_preferencia` | Hospital preferencial em caso de urgência |

### Atividade física

| Variável | Descrição |
|---|---|
| `atividadefisicasn` | "Não possui restrição para atividade física" ou "Possui restrição para atividade física" |

---

## Observações gerais

- Datas são armazenadas no formato `aaaa-mm-dd` e convertidas automaticamente para `dd/mm/aaaa` no documento.
- Campos de telefone são formatados automaticamente como `(XX) XXXXX-XXXX`.
- Campos com `true/false` (checkboxes) aparecem no documento como `( X )` quando marcados e `(   )` quando não marcados.
- Campos condicionais só aparecem no formulário **e** no documento quando a pergunta-mãe for respondida com **Sim**.

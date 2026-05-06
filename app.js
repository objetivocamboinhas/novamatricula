const STORAGE_KEY = "ficha-matricula-rascunho";

const FIELD_GROUPS = [
  {
    title: "Dados da Matricula",
    open: true,
    fields: [
      ["N_Matricula", "Numero da matricula"],
      ["ano", "Ano"],
      ["getdate", "Data"],
      ["aluno_segmento", "Segmento"],
      ["aluno_turma", "Serie/Turma"],
      ["TURNO", "Turno"],
      ["TIPO", "Tipo"],
      ["dependência", "Dependencia"],
      ["Dependenciamateria", "Materia da dependencia", "wide"],
    ],
  },
  {
    title: "Aluno",
    open: true,
    fields: [
      ["aluno_nomealuno", "Nome do aluno", "wide"],
      ["aluno_cpf", "CPF"],
      ["aluno_sexo", "Sexo", "select:sexo"],
      ["aluno_dtnascimento", "Data de nascimento", "date"],
      ["aluno_rg", "RG"],
      ["aluno_rgemissao", "Data de emissao", "date"],
      ["aluno_rgexpedidor", "Expedidor"],
      ["aluno_nacionalidade", "Nacionalidade"],
      ["aluno_email", "E-mail", "email"],
      ["aluno_residencial", "Telefone residencial", "tel"],
      ["aluno_cel", "Celular", "tel"],
      ["aluno_escoladeorigem", "Escola de origem", "wide"],
      ["aluno_reside", "Reside com"],
      ["aluno_irmao", "Tem irmao na escola"],
      ["aluno_irmaoqt", "Quantidade de irmaos"],
      ["aluno_turmairmao", "Turma do irmao"],
    ],
  },
  {
    title: "Endereco do Aluno",
    fields: [
      ["aluno_cep", "CEP"],
      ["aluno_uf", "Estado"],
      ["aluno_cidade", "Cidade"],
      ["aluno_bairro", "Bairro"],
      ["aluno_endereco", "Endereco", "wide"],
      ["numero", "Numero"],
    ],
  },
  {
    title: "Mae",
    fields: [
      ["filiacao1_nome", "Nome da mae", "wide"],
      ["filiacao1_email", "E-mail", "email"],
      ["filiacao1_dtnascimento", "Data de nascimento", "date"],
      ["filiacao1_nacionalidade", "Nacionalidade"],
      ["filiacao1_cpf", "CPF"],
      ["filiacao1_rg", "RG"],
      ["filiacao1_civil", "Estado civil"],
      ["filiacao1_ocupacao", "Ocupacao"],
      ["filiacao1_cel", "Celular", "tel"],
      ["filiacao1_residencial", "Telefone residencial", "tel"],
      ["filiacao1_comercial", "Telefone comercial", "tel"],
      ["filiacao1_cep", "CEP"],
      ["filiacao1_uf", "UF"],
      ["filiacao1_municipio", "Municipio"],
      ["filiacao1_bairro", "Bairro"],
      ["filiacao1_endereco", "Endereco", "wide"],
    ],
  },
  {
    title: "Pai",
    fields: [
      ["filiacao2_nome", "Nome do pai", "wide"],
      ["filiacao2_email", "E-mail", "email"],
      ["filiacao2_dtnascimento", "Data de nascimento", "date"],
      ["filiacao2_nacionalidade", "Nacionalidade"],
      ["filiacao2_cpf", "CPF"],
      ["filiacao2_rg", "RG"],
      ["filiacao2_civil", "Estado civil"],
      ["filiacao2_ocupacao", "Ocupacao"],
      ["filiacao2_cel", "Celular", "tel"],
      ["filiacao2_residencial", "Telefone residencial", "tel"],
      ["filiacao2_comercial", "Telefone comercial", "tel"],
      ["filiacao2_cep", "CEP"],
      ["filiacao2_uf", "UF"],
      ["filiacao2_municipio", "Municipio"],
      ["filiacao2_bairro", "Bairro"],
      ["filiacao2_endereco", "Endereco", "wide"],
    ],
  },
  {
    title: "Responsavel Financeiro",
    fields: [
      ["respfinanceiro_nome", "Nome", "wide"],
      ["respfinanceiro_cpf", "CPF"],
      ["respfinanceiro_sexo", "Sexo", "select:sexo"],
      ["respfinanceiro_dtnascimento", "Data de nascimento", "date"],
      ["respfinanceiro_rg", "RG"],
      ["respfinanceiro_dtemissao", "Data de emissao", "date"],
      ["respfinanceiro_expedidor", "Expedidor"],
      ["respfinanceiro_nacionalidade", "Nacionalidade"],
      ["respfinanceiro_estadocivil", "Estado civil"],
      ["respfinanceiro_ocupacao", "Ocupacao"],
      ["respfinanceiro_parentesco", "Grau de parentesco"],
      ["respfinanceiro_email", "E-mail", "email"],
      ["respfinanceiro_residencial", "Telefone residencial", "tel"],
      ["respfinanceiro_cel", "Celular", "tel"],
      ["respfinanceiro_cep", "CEP"],
      ["respfinanceiro_uf", "Estado"],
      ["respfinanceiro_cidade", "Cidade"],
      ["respfinanceiro_bairro", "Bairro"],
      ["respfinanceiro_endereco", "Endereco", "wide"],
      ["respfinanceiro_numero", "Numero"],
    ],
  },
  {
    title: "Responsavel Academico",
    fields: [
      ["respacademico_nome", "Nome", "wide"],
      ["respacademico_cpf", "CPF"],
      ["respacademico_sexo", "Sexo", "select:sexo"],
      ["respacademico_dtnascimento", "Data de nascimento", "date"],
      ["respacademico_rg", "RG"],
      ["respacademico_dtemissao", "Data de emissao", "date"],
      ["respacademico_expedidor", "Expedidor"],
      ["respacademico_ocupacao", "Ocupacao"],
      ["respacademico_parentesco", "Grau de parentesco"],
      ["respacademico_email", "E-mail", "email"],
      ["respacademico_residencial", "Telefone residencial", "tel"],
      ["respacademico_cel", "Celular", "tel"],
      ["respacademico_cep", "CEP"],
      ["respacademico_uf", "Estado"],
      ["respacademico_cidade", "Cidade"],
      ["respacademico_bairro", "Bairro"],
      ["respacademico_endereco", "Endereco", "wide"],
      ["respacademico_numero", "Numero"],
      ["informaçõesresponsavel", "Informacoes do responsavel", "full textarea"],
    ],
  },
  {
    title: "Saude",
    fields: [
      ["aluno_tiposg", "Tipo sanguineo"],
      ["fatorRH", "Fator RH"],
      ["aluno_planodesaude", "Plano de saude"],
      ["aluno_planonumero", "Numero do plano"],
      ["aluno_medico", "Medico"],
      ["aluno_medicotel", "Telefone do medico", "tel"],
      ["alergicosn", "Alergico"],
      ["ALERGICO_TEXTO", "Alergia", "wide"],
      ["medicamentosn", "Usa medicamento"],
      ["MEDICAMENTO", "Medicamento", "wide"],
      ["aluno_medicamento", "Medicamento do aluno", "wide"],
      ["aluno_febre", "Tem febre"],
      ["aluno_febreremedio", "Remedio para febre", "wide"],
      ["insulinasn", "Usa insulina"],
      ["CONTAGIOSASN", "Doenca contagiosa"],
      ["aluno_condicao", "Condicao"],
      ["aluno_condicao1", "Condicao 1"],
      ["doencascongenitassn", "Doenca congenita"],
      ["doencascongenitasqual", "Qual doenca congenita", "wide"],
      ["doencascronicassn", "Doenca cronica"],
      ["tiposdedoencascronicas", "Tipo de doenca cronica", "wide"],
      ["tratamentocronicasn", "Tratamento cronico"],
      ["tratamento", "Tratamento", "wide"],
      ["faztratamentosn", "Faz tratamento"],
      ["tratamentotempo", "Tempo de tratamento"],
      ["tiposdedoenças", "Tipos de doencas", "wide"],
      ["doencasoutras", "Outras doencas", "wide"],
      ["doencasquando", "Quando", "wide"],
      ["Especial2", "Necessidade especial"],
      ["especial2Especificar", "Especificar", "wide"],
    ],
  },
  {
    title: "Autorizacoes e Saida",
    fields: [
      ["AUTORIZOSN", "Autorizo"],
      ["SAIDA", "Saida"],
      ["autoriza1", "Autorizado 1", "wide"],
      ["autoriza1cpf", "CPF 1"],
      ["autoriza1tel", "Telefone 1", "tel"],
      ["autoriza1p", "Parentesco 1"],
      ["autoriza2", "Autorizado 2", "wide"],
      ["autoriza2cpf", "CPF 2"],
      ["autoriza2tel", "Telefone 2", "tel"],
      ["autoriza2p", "Parentesco 2"],
      ["autoriza3", "Autorizado 3", "wide"],
      ["autoriza3cpf", "CPF 3"],
      ["autoriza3tel", "Telefone 3", "tel"],
      ["autoriza3p", "Parentesco 3"],
      ["autoriza4", "Autorizado 4", "wide"],
      ["autoriza4cpf", "CPF 4"],
      ["autoriza4tel", "Telefone 4", "tel"],
      ["autoriza4p", "Parentesco 4"],
      ["parentesco1_nome", "Contato 1"],
      ["parentesco1_tipo", "Parentesco contato 1"],
      ["parentesco1_tel", "Telefone contato 1", "tel"],
      ["parentesco2_nome", "Contato 2"],
      ["parentesco2_tipo", "Parentesco contato 2"],
      ["parentesco2_cel", "Celular contato 2", "tel"],
    ],
  },
  {
    title: "Transporte",
    fields: [
      ["condução_nome", "Empresa de transporte", "wide"],
      ["condução_condutor", "Condutor"],
      ["condução_cpf", "CPF do condutor"],
      ["condução_aux", "Auxiliar"],
      ["condução_cpfaux", "CPF do auxiliar"],
    ],
  },
];

const form = document.querySelector("#enrollmentForm");
const statusBox = document.querySelector("#status");

function renderForm() {
  const fragment = document.createDocumentFragment();

  for (const group of FIELD_GROUPS) {
    const details = document.createElement("details");
    if (group.open) details.open = true;

    const summary = document.createElement("summary");
    summary.textContent = group.title;
    details.append(summary);

    const fields = document.createElement("div");
    fields.className = "fields";

    for (const [name, label, kind = "text"] of group.fields) {
      fields.append(createField(name, label, kind));
    }

    details.append(fields);
    fragment.append(details);
  }

  const footer = document.createElement("div");
  footer.className = "footer-actions";
  const clear = document.createElement("button");
  clear.type = "button";
  clear.className = "ghost";
  clear.id = "clearForm";
  clear.textContent = "Limpar";
  const submit = document.createElement("button");
  submit.type = "submit";
  submit.className = "primary";
  submit.textContent = "Gerar DOCX";
  footer.append(clear, submit);
  fragment.append(footer);

  form.append(fragment);
}

function createField(name, labelText, kind) {
  const wrap = document.createElement("div");
  wrap.className = `field ${kind.includes("full") ? "full" : kind.includes("wide") ? "wide" : ""}`.trim();

  const label = document.createElement("label");
  label.htmlFor = name;
  label.textContent = labelText;
  wrap.append(label);

  let control;
  if (kind.includes("textarea")) {
    control = document.createElement("textarea");
  } else if (kind.startsWith("select:sexo")) {
    control = document.createElement("select");
    for (const value of ["", "Feminino", "Masculino"]) {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = value || "Selecione";
      control.append(option);
    }
  } else {
    control = document.createElement("input");
    control.type = ["date", "email", "tel"].includes(kind) ? kind : "text";
  }

  control.id = name;
  control.name = name;
  control.dataset.placeholder = name;
  wrap.append(control);
  return wrap;
}

function collectValues() {
  const data = {};
  for (const element of form.elements) {
    if (!element.name) continue;
    data[element.name.trim()] = element.value.trim();
  }
  return data;
}

function fillValues(data) {
  for (const element of form.elements) {
    if (!element.name) continue;
    element.value = data[element.name] || "";
  }
}

function setStatus(message, isError = false) {
  statusBox.textContent = message;
  statusBox.classList.toggle("error", isError);
}

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function formatDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return value;
  const [year, month, day] = value.split("-");
  return `${day}/${month}/${year}`;
}

async function generateDocx(event) {
  event.preventDefault();
  setStatus("Gerando arquivo...");

  try {
    const values = collectValues();
    const templateBuffer = await fetch("template.docx").then((response) => {
      if (!response.ok) throw new Error("Modelo template.docx nao encontrado.");
      return response.arrayBuffer();
    });

    const zip = await ZipPackage.fromArrayBuffer(templateBuffer);
    const documentEntry = zip.entries.find((entry) => entry.name === "word/document.xml");
    if (!documentEntry) throw new Error("O documento do Word nao foi encontrado no modelo.");

    const xml = new TextDecoder().decode(documentEntry.data);
    const filledXml = xml.replace(/\{\{([^{}]+)\}\}/g, (_, rawKey) => {
      const key = rawKey.trim();
      return escapeXml(formatDate(values[key] || ""));
    });

    documentEntry.data = new TextEncoder().encode(filledXml);
    const output = zip.toArrayBuffer();
    downloadBlob(output, buildFileName(values));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(values));
    setStatus("Arquivo DOCX gerado.");
  } catch (error) {
    console.error(error);
    setStatus(error.message || "Nao foi possivel gerar o arquivo.", true);
  }
}

function buildFileName(values) {
  const name = (values.aluno_nomealuno || "ficha_matricula")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/gi, "_")
    .replace(/^_+|_+$/g, "")
    .toLowerCase();
  return `${name || "ficha_matricula"}_preenchida.docx`;
}

function downloadBlob(buffer, filename) {
  const blob = new Blob([buffer], {
    type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

class ZipPackage {
  constructor(entries) {
    this.entries = entries;
  }

  static async fromArrayBuffer(buffer) {
    const bytes = new Uint8Array(buffer);
    const view = new DataView(buffer);
    const eocdOffset = findEndOfCentralDirectory(bytes);
    const centralDirectoryOffset = view.getUint32(eocdOffset + 16, true);
    const entryCount = view.getUint16(eocdOffset + 10, true);
    let offset = centralDirectoryOffset;
    const entries = [];

    for (let index = 0; index < entryCount; index += 1) {
      if (view.getUint32(offset, true) !== 0x02014b50) {
        throw new Error("Estrutura ZIP invalida.");
      }

      const method = view.getUint16(offset + 10, true);
      const compressedSize = view.getUint32(offset + 20, true);
      const uncompressedSize = view.getUint32(offset + 24, true);
      const fileNameLength = view.getUint16(offset + 28, true);
      const extraLength = view.getUint16(offset + 30, true);
      const commentLength = view.getUint16(offset + 32, true);
      const localHeaderOffset = view.getUint32(offset + 42, true);
      const nameBytes = bytes.slice(offset + 46, offset + 46 + fileNameLength);
      const name = new TextDecoder().decode(nameBytes);
      const data = await readLocalEntry(bytes, localHeaderOffset, method, compressedSize, uncompressedSize);
      entries.push({ name, data });
      offset += 46 + fileNameLength + extraLength + commentLength;
    }

    return new ZipPackage(entries);
  }

  toArrayBuffer() {
    const encoder = new TextEncoder();
    const localParts = [];
    const centralParts = [];
    let offset = 0;

    for (const entry of this.entries) {
      const nameBytes = encoder.encode(entry.name);
      const data = entry.data;
      const crc = crc32(data);
      const localHeader = new Uint8Array(30 + nameBytes.length);
      const localView = new DataView(localHeader.buffer);
      localView.setUint32(0, 0x04034b50, true);
      localView.setUint16(4, 20, true);
      localView.setUint16(6, 0x0800, true);
      localView.setUint16(8, 0, true);
      localView.setUint16(10, 0, true);
      localView.setUint16(12, 0, true);
      localView.setUint32(14, crc, true);
      localView.setUint32(18, data.length, true);
      localView.setUint32(22, data.length, true);
      localView.setUint16(26, nameBytes.length, true);
      localHeader.set(nameBytes, 30);
      localParts.push(localHeader, data);

      const centralHeader = new Uint8Array(46 + nameBytes.length);
      const centralView = new DataView(centralHeader.buffer);
      centralView.setUint32(0, 0x02014b50, true);
      centralView.setUint16(4, 20, true);
      centralView.setUint16(6, 20, true);
      centralView.setUint16(8, 0x0800, true);
      centralView.setUint16(10, 0, true);
      centralView.setUint16(12, 0, true);
      centralView.setUint16(14, 0, true);
      centralView.setUint32(16, crc, true);
      centralView.setUint32(20, data.length, true);
      centralView.setUint32(24, data.length, true);
      centralView.setUint16(28, nameBytes.length, true);
      centralView.setUint32(42, offset, true);
      centralHeader.set(nameBytes, 46);
      centralParts.push(centralHeader);

      offset += localHeader.length + data.length;
    }

    const centralDirectoryOffset = offset;
    const centralDirectorySize = centralParts.reduce((sum, part) => sum + part.length, 0);
    const eocd = new Uint8Array(22);
    const eocdView = new DataView(eocd.buffer);
    eocdView.setUint32(0, 0x06054b50, true);
    eocdView.setUint16(8, this.entries.length, true);
    eocdView.setUint16(10, this.entries.length, true);
    eocdView.setUint32(12, centralDirectorySize, true);
    eocdView.setUint32(16, centralDirectoryOffset, true);

    return concatUint8Arrays([...localParts, ...centralParts, eocd]).buffer;
  }
}

async function readLocalEntry(bytes, localHeaderOffset, method, compressedSize, uncompressedSize) {
  const view = new DataView(bytes.buffer);
  if (view.getUint32(localHeaderOffset, true) !== 0x04034b50) {
    throw new Error("Cabecalho ZIP invalido.");
  }
  const fileNameLength = view.getUint16(localHeaderOffset + 26, true);
  const extraLength = view.getUint16(localHeaderOffset + 28, true);
  const dataOffset = localHeaderOffset + 30 + fileNameLength + extraLength;
  const compressed = bytes.slice(dataOffset, dataOffset + compressedSize);

  if (method === 0) return compressed;
  if (method !== 8) throw new Error("Metodo de compactacao ZIP nao suportado.");

  const stream = new Blob([compressed]).stream().pipeThrough(new DecompressionStream("deflate-raw"));
  const result = new Uint8Array(await new Response(stream).arrayBuffer());
  if (result.length !== uncompressedSize) throw new Error("Falha ao descompactar o modelo DOCX.");
  return result;
}

function findEndOfCentralDirectory(bytes) {
  for (let index = bytes.length - 22; index >= Math.max(0, bytes.length - 66000); index -= 1) {
    if (
      bytes[index] === 0x50 &&
      bytes[index + 1] === 0x4b &&
      bytes[index + 2] === 0x05 &&
      bytes[index + 3] === 0x06
    ) {
      return index;
    }
  }
  throw new Error("Arquivo DOCX invalido.");
}

function concatUint8Arrays(parts) {
  const totalLength = parts.reduce((sum, part) => sum + part.length, 0);
  const result = new Uint8Array(totalLength);
  let offset = 0;
  for (const part of parts) {
    result.set(part, offset);
    offset += part.length;
  }
  return result;
}

const CRC_TABLE = new Uint32Array(256);
for (let index = 0; index < 256; index += 1) {
  let value = index;
  for (let bit = 0; bit < 8; bit += 1) {
    value = value & 1 ? 0xedb88320 ^ (value >>> 1) : value >>> 1;
  }
  CRC_TABLE[index] = value >>> 0;
}

function crc32(bytes) {
  let crc = 0xffffffff;
  for (const byte of bytes) {
    crc = CRC_TABLE[(crc ^ byte) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

renderForm();

document.querySelector("#saveDraft").addEventListener("click", () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(collectValues()));
  setStatus("Rascunho salvo neste navegador.");
});

document.querySelector("#loadDraft").addEventListener("click", () => {
  const draft = localStorage.getItem(STORAGE_KEY);
  if (!draft) {
    setStatus("Nenhum rascunho salvo.", true);
    return;
  }
  fillValues(JSON.parse(draft));
  setStatus("Rascunho carregado.");
});

document.querySelector("#clearForm").addEventListener("click", () => {
  form.reset();
  setStatus("Formulario limpo.");
});

form.addEventListener("submit", generateDocx);

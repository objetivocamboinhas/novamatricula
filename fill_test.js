// ============================================================
//  SCRIPT DE PREENCHIMENTO DE TESTE
//  Cole no console do browser (F12 → Console) e pressione Enter
// ============================================================
(function () {
  function fill(id, val) {
    save(id, val);
    const el = document.getElementById(id);
    if (!el) return;
    if (el.type === 'checkbox') {
      el.checked = !!val;
    } else {
      el.value = val;
      el.classList.remove('error');
    }
  }

  // ── Etapa 1: Matrícula ─────────────────────────────────────
  fill('segmento', 'Ensino Fundamental I');
  updateTurmas();
  fill('turma', '3º ANO');
  fill('TURNO', 'Manhã');

  // ── Etapa 2: Aluno ─────────────────────────────────────────
  fill('aluno_nomealuno',    'Pedro Henrique da Silva Souza');
  fill('aluno_dtnascimento', '2015-03-14');
  fill('aluno_sexo',         'Masculino');
  fill('aluno_cpf',          '123.456.789-09');
  fill('aluno_rg',           '12.345.678-9');
  fill('aluno_rgemissao',    '2020-01-15');
  fill('aluno_rgexpedidor',  'SSP/RJ');
  fill('aluno_nacionalidade','Brasileiro');
  fill('aluno_tiposg',       'O+');
  fill('aluno_escoladeorigem','Escola Municipal José de Alencar');
  fill('aluno_irmao',        'Não');
  fill('aluno_cep',          '24358-640');
  fill('aluno_uf',           'RJ');
  fill('aluno_cidade',       'Niterói');
  fill('aluno_bairro',       'Camboinhas');
  fill('aluno_endereco',     'Rua Professor Álvaro Caetano');
  fill('numero',             '908');
  fill('aluno_complemento',  'Apto 302');
  fill('aluno_email',        'pedro.souza@email.com');
  fill('aluno_cel',          '(21) 99999-0001');
  fill('aluno_residencial',  '(21) 2619-0001');
  fill('aluno_reside',       'Pais');

  // ── Etapa 3: Filiação 1 — Mãe ─────────────────────────────
  fill('filiacao1_nome',         'Ana Paula Silva Souza');
  fill('filiacao1_dtnascimento', '1985-06-20');
  fill('filiacao1_cpf',          '111.444.777-35');
  fill('filiacao1_rg',           '23.456.789-1');
  fill('filiacao1_nacionalidade','Brasileira');
  fill('filiacao1_civil',        'Casada');
  fill('filiacao1_ocupacao',     'Professora');
  fill('filiacao1_cel',          '(21) 99988-0002');
  fill('filiacao1_residencial',  '(21) 2619-0002');
  fill('filiacao1_comercial',    '(21) 2619-0003');
  fill('filiacao1_email',        'ana.souza@email.com');
  fill('filiacao1_cep',          '24358-640');
  fill('filiacao1_uf',           'RJ');
  fill('filiacao1_municipio',    'Niterói');
  fill('filiacao1_bairro',       'Camboinhas');
  fill('filiacao1_endereco',     'Rua Professor Álvaro Caetano');
  fill('filiacao1_complemento',  'Casa');

  // ── Etapa 4: Filiação 2 — Pai ─────────────────────────────
  fill('filiacao2_nome',         'Carlos Eduardo Souza');
  fill('filiacao2_dtnascimento', '1983-09-10');
  fill('filiacao2_cpf',          '529.982.247-25');
  fill('filiacao2_rg',           '34.567.890-2');
  fill('filiacao2_nacionalidade','Brasileiro');
  fill('filiacao2_civil',        'Casado');
  fill('filiacao2_ocupacao',     'Engenheiro Civil');
  fill('filiacao2_cel',          '(21) 99977-0003');
  fill('filiacao2_residencial',  '(21) 2619-0004');
  fill('filiacao2_comercial',    '(21) 3333-0005');
  fill('filiacao2_email',        'carlos.souza@email.com');
  fill('filiacao2_cep',          '24358-640');
  fill('filiacao2_uf',           'RJ');
  fill('filiacao2_municipio',    'Niterói');
  fill('filiacao2_bairro',       'Camboinhas');
  fill('filiacao2_endereco',     'Rua Professor Álvaro Caetano');
  fill('filiacao2_complemento',  'Casa');

  // ── Etapa 5: Responsáveis ──────────────────────────────────
  // Financeiro = Mãe
  fill('respfinanceiro_nome',         'Ana Paula Silva Souza');
  fill('respfinanceiro_cpf',          '111.444.777-35');
  fill('respfinanceiro_rg',           '23.456.789-1');
  fill('respfinanceiro_dtemissao',    '2005-03-10');
  fill('respfinanceiro_expedidor',    'SSP/RJ');
  fill('respfinanceiro_dtnascimento', '1985-06-20');
  fill('respfinanceiro_sexo',         'Feminino');
  fill('respfinanceiro_nacionalidade','Brasileira');
  fill('respfinanceiro_estadocivil',  'Casado(a)');
  fill('respfinanceiro_ocupacao',     'Professora');
  fill('respfinanceiro_parentesco',   'Mãe');
  fill('respfinanceiro_cep',          '24358-640');
  fill('respfinanceiro_uf',           'RJ');
  fill('respfinanceiro_cidade',       'Niterói');
  fill('respfinanceiro_bairro',       'Camboinhas');
  fill('respfinanceiro_endereco',     'Rua Professor Álvaro Caetano');
  fill('respfinanceiro_numero',       '908');
  fill('respfinanceiro_complemento',  'Apto 302');
  fill('respfinanceiro_email',        'ana.souza@email.com');
  fill('respfinanceiro_residencial',  '(21) 2619-0002');
  fill('respfinanceiro_cel',          '(21) 99988-0002');

  // Financeiro = Acadêmico (checkbox)
  fill('mesmo_responsavel', true);
  const banner = document.getElementById('banner_mesmo_responsavel');
  if (banner) banner.classList.add('checked');
  toggleAcademicoSection();

  // ── Etapa 6: Saída & Saúde ────────────────────────────────
  fill('SAIDA', 'Somente com responsável autorizado');
  updateSaidaVisibility();

  // Pessoas autorizadas a buscar
  fill('autoriza1',    'Ana Paula Silva Souza');
  fill('autoriza1p',   'Mãe');
  fill('autoriza1cpf', '111.444.777-35');
  fill('autoriza1tel', '(21) 99988-0002');

  fill('autoriza2',    'Carlos Eduardo Souza');
  fill('autoriza2p',   'Pai');
  fill('autoriza2cpf', '529.982.247-25');
  fill('autoriza2tel', '(21) 99977-0003');

  fill('autoriza3',    'Maria José Silva');
  fill('autoriza3p',   'Avó');
  fill('autoriza3cpf', '987.654.321-00');
  fill('autoriza3tel', '(21) 98765-0006');

  // Saúde
  fill('aluno_planodesaude', 'Unimed');
  fill('aluno_planonumero',  '0012345678');
  fill('aluno_medico',       'Dr. Roberto Almeida');
  fill('aluno_medicotel',    '(21) 2222-3333');
  fill('medicamentosn',      'Não');
  fill('alergicosn',         'Não');
  fill('aluno_febre',        'Paracetamol');
  fill('aluno_febreremedio', '500mg');

  // Contatos de emergência
  fill('parentesco1_nome', 'Ana Paula Silva Souza');
  fill('parentesco1_tipo', 'Mãe');
  fill('parentesco1_tel',  '(21) 99988-0002');
  fill('parentesco2_nome', 'Carlos Eduardo Souza');
  fill('parentesco2_tipo', 'Pai');
  fill('parentesco2_cel',  '(21) 99977-0003');

  console.log('%c✅ Formulário preenchido com sucesso!', 'color:green;font-size:16px;font-weight:bold');
  console.log('Navegue pelas abas para verificar cada etapa.');
  console.log('Na última aba (Revisar) clique em "Enviar matrícula" para gerar o documento.');
})();

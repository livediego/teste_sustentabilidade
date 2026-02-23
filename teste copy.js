import { chromium } from 'playwright';

const run = async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://alinvestverdecacb.com.br/Formulario');

  console.log('🌐 Site carregado online');

  // Agora ativa modo avião
  await context.setOffline(true);

  console.log('✈️ Modo offline ativado');

  await page.getByRole('textbox', { name: 'CNPJ *' }).fill('12345678910121');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  //Etapa 1
  await page.getByRole('textbox', { name: 'Nome da Empresa *' }).fill('Nome');
  await page.getByRole('textbox', { name: 'Razão Social' }).fill('Razao');
  await page.getByRole('textbox', { name: 'Data de Fundação' }).fill('2026-01-01');
  await page.getByRole('textbox', { name: 'Endereço' }).fill('Endereço');
  await page.getByRole('textbox', { name: 'Telefone' }).fill('telefone');
  await page.getByRole('textbox', { name: 'Cidade' }).fill('bsb');
  await page.getByRole('textbox', { name: 'Estado (UF)' }).fill('DF');
  await page.getByRole('textbox', { name: 'País' }).fill('Brasil');
  await page.getByRole('textbox', { name: 'E-mail' }).fill('contato@empresa.com.br');
  await page.getByRole('combobox').first().click();
  await page.getByRole('option', { name: 'Micro' }).click();
  await page.getByRole('combobox').nth(1).click();
  await page.getByRole('option', { name: 'Outro' }).click();
  await page.getByRole('textbox', { name: 'Nome Completo *' }).fill('Nome campoleto');
  await page.getByRole('textbox', { name: 'Cargo' }).fill('Sócio');
  await page.getByRole('combobox').nth(2).click();
  await page.getByRole('option', { name: 'Masculino' }).click();
  await page.getByRole('combobox').nth(3).click();  
  await page.getByText('Mais de 29 anos').click();
  await page.getByRole('textbox', { name: 'Email Institucional' }).fill('contato@empresa.com.br');
  await page.getByRole('button', { name: 'Próximo' }).click();
  
  //Etapa 2
  await page.getByRole('checkbox', { name: 'Uso de lâmpadas LED' }).click();
  await page.getByRole('checkbox', { name: 'Uso de luz natural durante o' }).click();
  await page.getByRole('checkbox', { name: 'Sensores de presença para' }).click();
  await page.getByRole('checkbox', { name: 'Desligamento de equipamentos' }).click();
  await page.getByText('Uso de lâmpadas LEDUso de luz').click();
  await page.getByRole('checkbox', { name: 'Equipamentos com selo de' }).click();
  await page.getByText('Uso de lâmpadas LEDUso de luz').click();
  await page.getByRole('checkbox', { name: 'Arejadores em torneiras' }).click();
  await page.getByRole('checkbox', { name: 'Implantação de energia solar' }).click();
  await page.getByRole('checkbox', { name: 'Reaproveitamento de água da' }).click();
  await page.getByRole('checkbox', { name: 'Campanhas internas de uso' }).click();
  await page.getByRole('checkbox', { name: 'Descarga com duplo acionamento' }).click();
  await page.getByRole('checkbox', { name: 'Otimização do website para' }).click();
  await page.getByRole('checkbox', { name: 'Uso de sensores em torneiras' }).click();
  await page.getByRole('checkbox', { name: 'Reparo de vazamentos' }).click();
  await page.getByText('Gestão de ResíduosSeparação').click();
  await page.getByRole('checkbox', { name: 'Uso de canecas em vez de' }).click();
  await page.getByRole('checkbox', { name: 'Parceria com cooperativas de' }).click();
  await page.getByRole('checkbox', { name: 'Separação de recicláveis' }).click();
  await page.getByRole('checkbox', { name: 'Participação em programas de' }).click();
  await page.getByRole('checkbox', { name: 'Reutilização de papel como' }).click();
  await page.getByRole('checkbox', { name: 'Reutilização de embalagens' }).click();
  await page.getByRole('checkbox', { name: 'Gestão de resíduos eletrônicos' }).click();
  await page.getByText('Doação ou reaproveitamento de materiais obsoletosImpressão frente e versoCompra').click();
  await page.getByRole('checkbox', { name: 'Preferência por produtos com' }).click();
  await page.getByText('Doação ou reaproveitamento de materiais obsoletosImpressão frente e versoCompra').click();
  await page.getByRole('checkbox', { name: 'Preferência por produtos com' }).click();
  await page.getByRole('checkbox', { name: 'Impressão frente e verso' }).click();
  await page.getByRole('checkbox', { name: 'Preferência por produtos com' }).click();
  await page.getByRole('checkbox', { name: 'Doação ou reaproveitamento de' }).click();
  await page.getByRole('checkbox', { name: 'Compra de insumos em grandes' }).click();
  await page.getByRole('checkbox', { name: 'Compra de fornecedores locais' }).click();
  await page.getByRole('checkbox', { name: 'Digitalização de manuais e' }).click();
  await page.getByRole('checkbox', { name: 'Uso de softwares de design' }).click();
  await page.getByRole('checkbox', { name: 'Brindes sustentáveis e' }).click();
  await page.getByRole('checkbox', { name: 'Digitalização de documentos' }).click();
  await page.getByText('Treinamento sobre sustentabilidadeCritérios sustentáveis nas compras da').click();
  await page.getByRole('checkbox', { name: 'Divulgação de boas práticas' }).click();
  await page.getByRole('checkbox', { name: 'Critérios sustentáveis nas' }).click();
  await page.getByRole('checkbox', { name: 'Implantação de indicadores' }).click();
  await page.getByRole('checkbox', { name: 'Criação de comitê interno de' }).click();
  await page.getByRole('checkbox', { name: 'Treinamento sobre' }).click();
  await page.getByRole('checkbox', { name: 'Monitoramento de consumo (á' }).click();
  await page.getByText('Treinamento sobre sustentabilidadeCritérios sustentáveis nas compras da').click();
  await page.getByRole('checkbox', { name: 'Uso de ferramentas digitais' }).click();
  await page.getByRole('checkbox', { name: 'Participação em comunidades' }).click();
  await page.getByRole('checkbox', { name: 'Incentivo ao uso de' }).click();
  await page.getByRole('button', { name: 'Próximo' }).click();

 //Etapa 3
  await page.getByRole('spinbutton', { name: 'Economizar dinheiro - recurso' }).fill('5');
  await page.getByRole('spinbutton', { name: 'Redução do uso de água (potá' }).fill('10');
  await page.getByRole('spinbutton', { name: 'Redução do uso de eletricidade' }).fill('15');
  await page.getByRole('spinbutton', { name: 'Redução do uso de matéria-' }).fill('20');
  await page.getByRole('spinbutton', { name: 'Redução no uso de materiais' }).fill('25');
  await page.getByRole('spinbutton', { name: 'Redução na quantidade de' }).fill('30');
  await page.getByRole('spinbutton', { name: 'Redução da concentração de' }).fill('35');
  await page.getByRole('spinbutton', { name: 'Reutilização de materiais' }).fill('40');
  await page.getByRole('spinbutton', { name: 'Reutilização de resíduos -' }).fill('45');
  await page.getByRole('spinbutton', { name: 'Reciclagem de resíduos de mat' }).fill('50');
  await page.getByRole('spinbutton', { name: 'Reciclagem de materiais' }).fill('55');
  await page.getByRole('spinbutton', { name: 'Melhoria dos processos' }).fill('60');

  await page.getByRole('checkbox', { name: 'Redesenho de produtos e servi' }).click();
  await page.getByRole('checkbox', { name: 'O investimento foi feito em' }).click();
  await page.getByRole('checkbox', { name: 'Investindo em uma' }).click();
  await page.getByRole('checkbox', { name: 'A comunicação com os clientes' }).click();
  await page.getByRole('checkbox', { name: 'Redesenho de etiquetas,' }).click();
  await page.getByRole('checkbox', { name: 'Investir em fontes de energia' }).click();
  await page.getByRole('checkbox', { name: 'Foram feitos investimentos em' }).click();
  await page.getByRole('checkbox', { name: 'Cumprimento de normas ecoló' }).click();
  await page.getByRole('textbox', { name: 'Detalhe da atividade:' }).fill('Parcerias estratégicas');
  
  await page.getByRole('checkbox', { name: 'Produção', exact: true }).click();
  await page.getByRole('checkbox', { name: 'Logística' }).click();
  await page.getByRole('checkbox', { name: 'Compras - abastecimento' }).click();
  await page.getByRole('checkbox', { name: 'Vendas e Marketing' }).click();
  await page.getByRole('checkbox', { name: 'Contabilidade Finanças' }).click();
  await page.getByRole('checkbox', { name: 'Distribuição' }).click();
  await page.getByRole('checkbox', { name: 'Talento humano' }).click();
  await page.getByRole('textbox', { name: 'Detalhe da área:' }).fill('Parcerias estratégicas');

  await page.getByRole('spinbutton', { name: 'Ano de Faturamento' }).fill('2025');
  await page.getByRole('spinbutton', { name: 'Volume de Negócios' }).fill('150000');
  await page.getByRole('radio', { name: 'Até 10%' }).click();
  
  await page.getByRole('textbox', { name: 'Data (entre 2023 e hoje)' }).fill('2025-02-14');
  await page.getByRole('button', { name: 'Próximo' }).click();
  
  //Etapa 4
  await page.getByRole('button', { name: 'Adicionar Primeiro Registro' }).click();
  await page.getByRole('cell', { name: '2026' }).getByRole('spinbutton').click();
  await page.getByRole('cell', { name: '2026' }).getByRole('spinbutton').fill('2025');
  await page.getByRole('combobox').click();
  await page.getByText('Mulher').click();
  await page.getByRole('spinbutton').nth(1).fill('01');
  await page.getByRole('spinbutton').nth(2).fill('02');
  await page.getByRole('spinbutton').nth(3).fill('03');
  await page.getByRole('spinbutton').nth(4).fill('04');

  await page.getByRole('button', { name: 'Adicionar Nova Linha' }).click();
  await page.getByRole('cell', { name: '2026' }).getByRole('spinbutton').click();
  await page.getByRole('cell', { name: '2026' }).getByRole('spinbutton').fill('2025');
  await page.getByRole('combobox').click();
  await page.getByText('Homem').click();
  await page.getByRole('spinbutton').nth(1).fill('01');
  await page.getByRole('spinbutton').nth(2).fill('02');
  await page.getByRole('spinbutton').nth(3).fill('03');
  await page.getByRole('spinbutton').nth(4).fill('04');

  await page.getByRole('checkbox', {name:'Produção'}).click();
  await page.getByRole('checkbox', {name:'Finanças - contabilidade'}).click();
  await page.getByRole('checkbox', {name:'Logística'}).click();
  await page.getByRole('checkbox', {name:'Distribuição'}).click();
  await page.getByRole('checkbox', {name:'Vendas - marketing'}).click();
  await page.getByRole('checkbox', {name:'Talento humano'}).click();
  await page.getByRole('checkbox', { name: 'Compras - abastecimento' }).click();
  await page.getByRole('textbox', { name: 'Detalhe sobre outras áreas' }).fill('Parcerias estratégicas');

  await page.getByRole('textbox', { name: 'Nome dos regulamentos, norma' }).fill('ISO 9001');
  await page.getByRole('checkbox', { name: 'Nacional no âmbito' }).click();
  await page.getByRole('checkbox', { name: 'Cobertura de todos os' }).click();
  await page.getByRole('checkbox', { name: 'Capacitación a parte del' }).click();
  await page.getByRole('checkbox', { name: 'Internacional no escopo' }).click();
  await page.getByRole('checkbox', { name: 'Treinamento para parte do' }).click();
  await page.getByRole('checkbox', { name: 'Treinamento para todo o' }).click();

  await page.getByRole('checkbox', {name:'Produção'}).click();
  await page.getByRole('checkbox', {name:'Finanças - contabilidade'}).click();
  await page.getByRole('checkbox', {name:'Logística'}).click();
  await page.getByRole('checkbox', {name:'Distribuição'}).click();
  await page.getByRole('checkbox', {name:'Vendas - marketing'}).click();
  await page.getByRole('checkbox', {name:'Talento humano'}).click();
  await page.getByRole('checkbox', { name: 'Compras - compras' }).click();
  await page.getByRole('checkbox', { name: 'Outro' }).click();
  await page.getByRole('textbox', { name: 'Detalhe sobre outras áreas' }).fill('Parcerias estratégicas');
  await page.getByRole('button', { name: 'Próximo' }).click();

//Etapa 5
  await page.locator('canvas').click({
    position: {
      x: 280,
      y: 56
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 386,
      y: 73
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 279,
      y: 90
    }
  });
  await page.getByRole('checkbox', { name: 'Declaro que as respostas' }).click();
  await page.getByRole('button', { name: 'Enviar Formulário' }).click();

  // opcional: esperar alguns segundos antes de fechar
  await page.waitForTimeout(5000);
  await browser.close();

};

run();
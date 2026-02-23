import { chromium } from 'playwright';

async function marcarTodosSelecionaveis(page) {

  // 1️⃣ Checkboxes reais
  const checkboxes = page.locator('input[type="checkbox"]:visible');
  const totalCheckboxes = await checkboxes.count();

  for (let i = 0; i < totalCheckboxes; i++) {
    const cb = checkboxes.nth(i);
    if (!(await cb.isChecked())) {
      await cb.check({ force: true });
    }
  }

  // 2️⃣ Elementos com role=checkbox
  const roleCheckboxes = page.locator('[role="checkbox"]:visible');
  const totalRole = await roleCheckboxes.count();

  for (let i = 0; i < totalRole; i++) {
    await roleCheckboxes.nth(i).click({ force: true });
  }

  // 3️⃣ Botões toggle (shadcn, radix, etc)
  const toggleButtons = page.locator('button[aria-pressed="false"]:visible');
  const totalToggle = await toggleButtons.count();

  for (let i = 0; i < totalToggle; i++) {
    await toggleButtons.nth(i).click({ force: true });
  }

}

const empresas = [
  { razao: "Empresa Alpha LTDA", cnpj: "12345678000101", email: "alpha@email.com", responsavel: "Neymar Jr.", cargo: "Sócio" },
  { razao: "Empresa Beta ME", cnpj: "23456789000102", email: "beta@email.com", responsavel: "Lionel Messi", cargo: "Diretor" },
  { razao: "Empresa Gama EIRELI", cnpj: "34567890000103", email: "gama@email.com", responsavel: "Cristiano Ronaldo", cargo: "Gerente" },
  { razao: "Empresa Delta SA", cnpj: "45678901000104", email: "delta@email.com", responsavel: "Kylian Mbappé", cargo: "Coordenador" },
  { razao: "Empresa Épsilon LTDA", cnpj: "56789012000105", email: "epsilon@email.com", responsavel: "Erling Haaland", cargo: "Analista" }
];

const run = async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  await context.setOffline(false);
  await page.goto('https://alinvestverdecacb.com.br/Formulario');
  console.log('🌐 Site carregado online');

  // Ativa modo avião
  await context.setOffline(true);
  console.log('✈️ Modo offline ativado');

  for (const empresa of empresas) {
    console.log(`Preenchendo: ${empresa.razao}`);

    await page.getByRole('textbox', { name: 'CNPJ *' }).fill(empresa.cnpj);
    page.once('dialog', dialog => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.dismiss().catch(() => { });
    });
    //Etapa 1
    await page.getByRole('textbox', { name: 'Nome da Empresa *' }).fill(empresa.razao);
    await page.getByRole('textbox', { name: 'Razão Social' }).fill(empresa.razao + ' LTDA');
    await page.getByRole('textbox', { name: 'Data de Fundação' }).fill('2026-01-01');
    await page.getByRole('textbox', { name: 'Endereço' }).fill('Endereço');
    await page.getByRole('textbox', { name: 'Telefone' }).fill('telefone');
    await page.getByRole('textbox', { name: 'Cidade' }).fill('bsb');
    await page.getByRole('textbox', { name: 'Estado (UF)' }).fill('DF');
    await page.getByRole('textbox', { name: 'País' }).fill('Brasil');
    await page.getByRole('textbox', { name: 'E-mail' }).fill(empresa.email);
    await page.getByRole('combobox').first().click();
    await page.getByRole('option', { name: 'Micro' }).click();
    await page.getByRole('combobox').nth(1).click();
    await page.getByRole('option', { name: 'Outro' }).click();
    await page.getByRole('textbox', { name: 'Nome Completo *' }).fill(empresa.responsavel);
    await page.getByRole('textbox', { name: 'Cargo' }).fill(empresa.cargo);
    await page.getByRole('combobox').nth(2).click();
    await page.getByRole('option', { name: 'Masculino' }).click();
    await page.getByRole('combobox').nth(3).click();
    await page.getByText('Mais de 29 anos').click();
    await page.getByRole('textbox', { name: 'Email Institucional' }).fill(empresa.email);
    await page.getByRole('button', { name: 'Próximo' }).click();

    //Etapa 2
    await marcarTodosSelecionaveis(page);
    await page.getByRole('button', { name: 'Próximo' }).click();

    //Etapa 3
    await marcarTodosSelecionaveis(page);
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

    await page.getByRole('textbox', { name: 'Detalhe da atividade:' }).fill('Parcerias estratégicas');
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
    await page.getByRole('combobox').first().click();
    await page.getByText('Mulher').click();
    await page.getByRole('spinbutton').nth(1).fill('01');
    await page.getByRole('spinbutton').nth(2).fill('02');
    await page.getByRole('spinbutton').nth(3).fill('03');
    await page.getByRole('spinbutton').nth(4).fill('04');

    await page.getByRole('button', { name: 'Adicionar Nova Linha' }).click();
    await page.getByRole('cell', { name: '2026' }).getByRole('spinbutton').click();
    await page.getByRole('cell', { name: '2026' }).getByRole('spinbutton').fill('2025');
    await page.getByRole('combobox').nth(1).click();
    await page.getByText('Homem').click();
    await page.getByRole('spinbutton').nth(1).fill('01');
    await page.getByRole('spinbutton').nth(2).fill('02');
    await page.getByRole('spinbutton').nth(3).fill('03');
    await page.getByRole('spinbutton').nth(4).fill('04');

    await marcarTodosSelecionaveis(page);

    await page.getByRole('textbox', { name: 'Detalhe sobre outras áreas' }).fill('Parcerias estratégicas');
    await page.getByRole('textbox', { name: 'Nome dos regulamentos, norma' }).fill('ISO 9001');
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

    await page.waitForTimeout(1000);

  }

  console.log('Finalizou preenchimentos');

  // Desativa modo avião
  await context.setOffline(false);
  console.log('🌐 Conexão restaurada');

  // Espera na tela sem fechar
  //await page.waitForTimeout(99999999);
  if (browser) await browser.close();

};

run();
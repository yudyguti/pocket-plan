const STORAGE_KEY = "creditpulse-class-user-v1";
const translations = {
  en: {
    workspace:"WORKSPACE", overview:"Overview", accounts:"Accounts", transactions:"Transactions", savingsPlanner:"Savings planner",
    yourDataStaysYours:"Your data stays yours", privateNote:"Your information is saved only in this browser. No bank connection.", storedLocally:"Stored locally",
    personalFinance:"Personal finance", language:"Language", addTransaction:"Add transaction", yourMoneyAtAGlance:"YOUR MONEY, AT A GLANCE", goodMorning:"Good morning",
    dashboardSubtitle:"A little clarity goes a long way. Here's your monthly picture.", monthlyIncome:"Monthly income", budgetedExpenses:"Budgeted expenses",
    savingsCapacity:"Savings capacity", vsLastMonth:"vs. last month", ofMonthlyIncome:"of monthly income", afterPlannedExpenses:"After planned expenses", youreOnTrack:"You're on track",
    monthlyCashFlow:"Monthly cash flow", incomeVsSpending:"Income vs. spending", income:"Income", spending:"Spending", comingUp:"Coming up", paymentDueDates:"Payment due dates",
    viewAllPayments:"View all payments", yourAccounts:"Your accounts", accountsOverview:"A quick overview", seeAll:"See all", savingsGoal:"Savings goal",
    monthlyTarget:"Your monthly target", perMonth:"/ month", adjustYourPlan:"Adjust your plan", demoDisclaimer:"Enter your own information for class. It stays in this browser. This app does not connect to a bank.", addFirstAccount:"Add your first account to get started.", enterYourOwnInfo:"Enter your own information. The app does not add example data.",
    yourFinancialPicture:"YOUR FINANCIAL PICTURE", accountsSubtitle:"Keep balances and payment details together.", addAccount:"Add account", debitCards:"Debit cards",
    availableBalance:"Available balance", creditCards:"Credit cards", debtAndPaymentDetails:"Debt and payment details", creditLines:"Credit lines", availableCredit:"Available credit",
    everyLittleDetail:"EVERY LITTLE DETAIL", transactionsSubtitle:"Review spending or import a statement to get started.", importStatement:"Import statement", searchTransactions:"Search transactions",
    searchPlaceholder:"Search transactions", filterCategory:"Filter by category", allCategories:"All categories", date:"Date", description:"Description", category:"Category", account:"Account",
    amount:"Amount", actions:"Actions", noTransactions:"No transactions here yet", noTransactionsHint:"Add one manually or import a CSV statement.", importPrivacy:"Statements are processed in this browser and stay on this device.",
    makeRoomForTomorrow:"MAKE ROOM FOR TOMORROW", plannerSubtitle:"A simple starting point, shaped around your monthly income.", yourMonthlyPlan:"Your monthly plan",
    adjustPercent:"Adjust your savings percentage anytime.", suggestedMonthlySavings:"Suggested monthly savings", incomeToSave:"Income to save",
    plannedExpenses:"Planned expenses", savingsAllocation:"Savings allocation", flexibleMoney:"Flexible money", aGentleReminder:"A GENTLE REMINDER",
    smallStepsAddUp:"Small steps add up.", savingsTip:"Even a small, regular contribution can help you build a cushion over time. Choose an amount that feels realistic for your budget.",
    yourPlanStaysPrivate:"Your plan is private and stays on this device.", plannerDisclaimer:"This is an illustrative planning tool, not financial advice. Adjust the suggested amount to fit your needs.",
    classDemo:"Class demo", yourMoneyYourWay:"YOUR MONEY, YOUR WAY", cancel:"Cancel", saveTransaction:"Save transaction", type:"Type", expense:"Expense",
    accountName:"Account name", accountType:"Account type", debitCard:"Debit card", creditCard:"Credit card", creditLine:"Credit line", balance:"Balance",
    creditLimitOptional:"Credit limit (optional)", minimumPayment:"Minimum payment", dueDate:"Due date", statementBalanceOptional:"Statement balance (optional)",
    accountHint:"For credit cards, statement balance is what to pay to avoid interest; minimum payment is the minimum due.", saveAccount:"Save account",
    reviewBeforeSaving:"REVIEW BEFORE SAVING",     importInstructions:"Choose a CSV or PDF statement. CSV rows can be extracted automatically. Preview the PDF here and add or correct transactions in the review table.",
    chooseStatement:"Choose a statement", supportedFormats:"CSV or PDF · processed on this device", reviewTransactions:"Review transactions", addRow:"Add row",
    saveToAccount:"Save to account", saveReviewedTransactions:"Save reviewed transactions",     paidBy:"Paid by", minimumDue:"Minimum due", fullBalance:"Full balance", statementBalance:"Statement balance",
    dueIn:"Due in", dueToday:"Due today", dueTomorrow:"Due tomorrow", days:"days", dueOn:"Due", noPayments:"No upcoming payments", saved:"Saved on this device",
    edited:"Transaction updated", transactionAdded:"Transaction added", accountAdded:"Account added", imported:"transactions saved", deleted:"Transaction deleted",
    chooseValidFile:"Choose a CSV or PDF file.", fileReadError:"This file could not be read.", csvNoRows:"No transaction rows found. Add rows below.",
    pdfReview:"PDF selected. Review the preview and add or correct transactions below; automatic text extraction is not supported.",
    csvFound:"Rows loaded for review. Check the details and categories before saving.", noAccount:"Add an account first to save transactions.",
    confirmDelete:"Delete this transaction?", accountPlaceholder:"Choose account", categoryPlaceholder:"Choose category", missingRequired:"Fill in the required fields.",
    edit:"Edit", delete:"Delete", incomeType:"Income", expenseType:"Expense", deleteRow:"Remove row", accountSaved:"Account saved"
  },
  es: {
    workspace:"ESPACIO DE TRABAJO", overview:"Resumen", accounts:"Cuentas", transactions:"Transacciones", savingsPlanner:"Plan de ahorro",
    yourDataStaysYours:"Tus datos son tuyos", privateNote:"Tu información se guarda solo en este navegador. Sin conexión bancaria.", storedLocally:"Guardado localmente",
    personalFinance:"Finanzas personales", language:"Idioma", addTransaction:"Agregar transacción", yourMoneyAtAGlance:"TU DINERO DE UN VISTAZO", goodMorning:"Buenos días",
    dashboardSubtitle:"Un poco de claridad ayuda mucho. Así se ven tus finanzas este mes.", monthlyIncome:"Ingresos mensuales", budgetedExpenses:"Gastos presupuestados",
    savingsCapacity:"Capacidad de ahorro", vsLastMonth:"vs. mes pasado", ofMonthlyIncome:"de los ingresos mensuales", afterPlannedExpenses:"Después de los gastos previstos", youreOnTrack:"Vas por buen camino",
    monthlyCashFlow:"Flujo de caja mensual", incomeVsSpending:"Ingresos vs. gastos", income:"Ingresos", spending:"Gastos", comingUp:"Próximos pagos", paymentDueDates:"Fechas de pago",
    viewAllPayments:"Ver todos los pagos", yourAccounts:"Tus cuentas", accountsOverview:"Un resumen rápido", seeAll:"Ver todas", savingsGoal:"Meta de ahorro",
    monthlyTarget:"Tu meta mensual", perMonth:"/ mes", adjustYourPlan:"Ajustar tu plan", demoDisclaimer:"Ingresa tu información para la clase. Se guarda en este navegador. La app no se conecta a bancos.", addFirstAccount:"Agrega tu primera cuenta para comenzar.", enterYourOwnInfo:"Ingresa tu propia información. La app no agrega datos de ejemplo.",
    yourFinancialPicture:"TU SITUACIÓN FINANCIERA", accountsSubtitle:"Mantén juntos tus saldos y fechas de pago.", addAccount:"Agregar cuenta", debitCards:"Tarjetas de débito",
    availableBalance:"Saldo disponible", creditCards:"Tarjetas de crédito", debtAndPaymentDetails:"Deuda y detalles de pago", creditLines:"Líneas de crédito", availableCredit:"Crédito disponible",
    everyLittleDetail:"CADA DETALLE CUENTA", transactionsSubtitle:"Revisa tus gastos o importa un estado de cuenta.", importStatement:"Importar estado de cuenta", searchTransactions:"Buscar transacciones",
    searchPlaceholder:"Buscar transacciones", filterCategory:"Filtrar por categoría", allCategories:"Todas las categorías", date:"Fecha", description:"Descripción", category:"Categoría", account:"Cuenta",
    amount:"Monto", actions:"Acciones", noTransactions:"Aún no hay transacciones", noTransactionsHint:"Agrega una o importa un estado de cuenta CSV.", importPrivacy:"Los estados se procesan en este navegador y permanecen en este dispositivo.",
    makeRoomForTomorrow:"HAZ ESPACIO PARA EL FUTURO", plannerSubtitle:"Un punto de partida sencillo basado en tus ingresos mensuales.", yourMonthlyPlan:"Tu plan mensual",
    adjustPercent:"Ajusta tu porcentaje de ahorro cuando quieras.", suggestedMonthlySavings:"Ahorro mensual sugerido", incomeToSave:"Porcentaje para ahorrar",
    plannedExpenses:"Gastos previstos", savingsAllocation:"Ahorro asignado", flexibleMoney:"Dinero flexible", aGentleReminder:"UN RECORDATORIO AMABLE",
    smallStepsAddUp:"Cada pequeño paso cuenta.", savingsTip:"Incluso una contribución pequeña y constante puede ayudarte a crear un fondo con el tiempo. Elige un monto realista para tu presupuesto.",
    yourPlanStaysPrivate:"Tu plan es privado y se guarda en este dispositivo.", plannerDisclaimer:"Esta es una herramienta ilustrativa, no asesoría financiera. Ajusta el monto sugerido según tus necesidades.",
    classDemo:"Demostración de clase", yourMoneyYourWay:"TU DINERO, A TU MANERA", cancel:"Cancelar", saveTransaction:"Guardar transacción", type:"Tipo", expense:"Gasto",
    accountName:"Nombre de cuenta", accountType:"Tipo de cuenta", debitCard:"Tarjeta de débito", creditCard:"Tarjeta de crédito", creditLine:"Línea de crédito", balance:"Saldo",
    creditLimitOptional:"Límite de crédito (opcional)", minimumPayment:"Pago mínimo", dueDate:"Fecha de vencimiento", statementBalanceOptional:"Saldo del estado de cuenta (opcional)",
    accountHint:"En tarjetas de crédito, el saldo del estado de cuenta es lo que debes pagar para evitar intereses; el pago mínimo es el mínimo requerido.", saveAccount:"Guardar cuenta",
    reviewBeforeSaving:"REVISA ANTES DE GUARDAR",     importInstructions:"Elige un estado de cuenta CSV o PDF. Las filas CSV se extraen automáticamente. Previsualiza el PDF aquí y agrega o corrige las transacciones en la tabla.",
    chooseStatement:"Elegir un estado de cuenta", supportedFormats:"CSV o PDF · procesado en este dispositivo", reviewTransactions:"Revisar transacciones", addRow:"Agregar fila",
    saveToAccount:"Guardar en la cuenta", saveReviewedTransactions:"Guardar transacciones revisadas",     paidBy:"Pagado con", minimumDue:"Pago mínimo", fullBalance:"Saldo total", statementBalance:"Saldo del estado de cuenta",
    dueIn:"Vence en", dueToday:"Vence hoy", dueTomorrow:"Vence mañana", days:"días", dueOn:"Vence", noPayments:"No hay pagos próximos", saved:"Guardado en este dispositivo",
    edited:"Transacción actualizada", transactionAdded:"Transacción agregada", accountAdded:"Cuenta agregada", imported:"transacciones guardadas", deleted:"Transacción eliminada",
    chooseValidFile:"Elige un archivo CSV o PDF.", fileReadError:"No se pudo leer este archivo.", csvNoRows:"No se encontraron transacciones. Agrega filas abajo.",
    pdfReview:"PDF seleccionado. Revisa la vista previa y agrega o corrige transacciones abajo; no se admite la extracción automática de texto.",
    csvFound:"Filas cargadas para revisar. Verifica los detalles y las categorías antes de guardar.", noAccount:"Agrega una cuenta primero para guardar transacciones.",
    confirmDelete:"¿Eliminar esta transacción?", accountPlaceholder:"Elige una cuenta", categoryPlaceholder:"Elige una categoría", missingRequired:"Completa los campos obligatorios.",
    edit:"Editar", delete:"Eliminar", incomeType:"Ingreso", expenseType:"Gasto", deleteRow:"Quitar fila", accountSaved:"Cuenta guardada"
  }
};

const categories = [
  {id:"housing",en:"Housing",es:"Vivienda"},{id:"groceries",en:"Groceries",es:"Comestibles"},{id:"transport",en:"Transport",es:"Transporte"},
  {id:"utilities",en:"Utilities",es:"Servicios"},{id:"dining",en:"Dining",es:"Restaurantes"},{id:"health",en:"Health",es:"Salud"},
  {id:"shopping",en:"Shopping",es:"Compras"},{id:"subscriptions",en:"Subscriptions",es:"Suscripciones"},{id:"income",en:"Income",es:"Ingresos"},
  {id:"other",en:"Other",es:"Otros"}
];
const currentMonth = new Date();
const dateISO = (dayOffset) => {
  const date = new Date();
  date.setDate(date.getDate() + dayOffset);
  return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,"0")}-${String(date.getDate()).padStart(2,"0")}`;
};
const defaultData = () => ({
  language:"en", savingsRate:20,
  accounts:[],
  transactions:[]
});
let data;
try {
  const saved = localStorage.getItem(STORAGE_KEY);
  data = saved ? {...defaultData(),...JSON.parse(saved)} : defaultData();
  if (!Array.isArray(data.accounts) || !Array.isArray(data.transactions)) data = defaultData();
} catch (error) {
  console.error("Could not load CreditPulse data.", error);
  data = defaultData();
}
let importRows = [];
let importObjectUrl;
let toastTimer;
const money = (amount) => new Intl.NumberFormat(data.language === "es" ? "es-US" : "en-US",{style:"currency",currency:"USD"}).format(Number(amount) || 0);
const t = (key) => translations[data.language]?.[key] || translations.en[key] || key;
const byId = (id) => document.getElementById(id);
function saveData() {
  try { localStorage.setItem(STORAGE_KEY,JSON.stringify(data)); }
  catch(error) { console.error("Could not save CreditPulse data.",error); showToast("Could not save. Check device storage."); }
}
function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g,(char)=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
}
function categoryName(id) {
  const category = categories.find(item=>item.id===id);
  return category ? category[data.language] : (id || t("other"));
}
function accountName(id) {
  return data.accounts.find(account=>account.id===id)?.name || "—";
}
function formatDate(value, options={month:"short",day:"numeric"}) {
  if (!value) return "—";
  const date = new Date(`${value}T12:00:00`);
  return new Intl.DateTimeFormat(data.language==="es"?"es-US":"en-US",options).format(date);
}
function monthLabel() {
  return new Intl.DateTimeFormat(data.language==="es"?"es-US":"en-US",{month:"long",year:"numeric"}).format(currentMonth);
}
function monthlyTotals() {
  const prefix = `${currentMonth.getFullYear()}-${String(currentMonth.getMonth()+1).padStart(2,"0")}`;
  const transactions = data.transactions.filter(item=>item.date?.startsWith(prefix));
  const income = transactions.filter(item=>item.type==="income").reduce((sum,item)=>sum+Number(item.amount),0);
  const expenses = transactions.filter(item=>item.type!=="income").reduce((sum,item)=>sum+Number(item.amount),0);
  return {income,expenses};
}
function applyLanguage() {
  document.documentElement.lang=data.language;
  document.querySelectorAll("[data-i18n]").forEach(el=>{el.textContent=t(el.dataset.i18n);});
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>{el.placeholder=t(el.dataset.i18nPlaceholder);});
  byId("language-select").value=data.language;
  render();
}
function render() {
  const totals=monthlyTotals();
  const capacity=Math.max(0,totals.income-totals.expenses);
  byId("current-month").textContent=monthLabel();
  document.querySelector(".savings-note").hidden=!totals.income&&!totals.expenses;
  byId("income-total").textContent=money(totals.income);
  byId("expenses-total").textContent=money(totals.expenses);
  byId("savings-total").textContent=money(capacity);
  const percent=totals.income?Math.min(100,totals.expenses/totals.income*100):0;
  byId("budget-used").textContent=`${Math.round(percent)}%`;
  byId("expense-progress").style.width=`${percent}%`;
  byId("goal-amount").textContent=money(totals.income*data.savingsRate/100);
  byId("goal-caption").textContent=`${data.savingsRate}% ${data.language==="es"?"de los ingresos mensuales":"of your monthly income"}`;
  byId("goal-progress").style.width=`${Math.min(100,totals.income?capacity/(totals.income*data.savingsRate/100)*100:0)}%`;
  byId("savings-rate").value=data.savingsRate;
  byId("savings-rate-label").textContent=data.savingsRate;
  byId("planner-savings").textContent=money(totals.income*data.savingsRate/100);
  byId("planner-expenses").textContent=money(totals.expenses);
  byId("planner-allocation").textContent=money(totals.income*data.savingsRate/100);
  byId("planner-flexible").textContent=money(Math.max(0,totals.income-totals.expenses-totals.income*data.savingsRate/100));
  renderChart();
  renderAlerts();
  renderAccounts();
  renderTransactions();
  populateAccountOptions();
}
function renderChart() {
  const weeks=Array.from({length:4},()=>({income:0,expenses:0}));
  const prefix=`${currentMonth.getFullYear()}-${String(currentMonth.getMonth()+1).padStart(2,"0")}`;
  data.transactions.filter(item=>item.date?.startsWith(prefix)).forEach(item=>{
    const week=Math.min(3,Math.floor((Number(item.date.slice(8,10))-1)/7));
    weeks[week][item.type==="income"?"income":"expenses"]+=Number(item.amount);
  });
  const scale=Math.max(1,...weeks.flatMap(week=>[week.income,week.expenses]));
  const host=byId("cashflow-chart");
  host.replaceChildren();
  weeks.forEach((week,index)=>{
    const group=document.createElement("div");group.className="chart-group";
    const income=document.createElement("span");income.className="chart-bar income";income.style.height=`${Math.max(2,week.income/scale*82)}%`;income.title=`${t("income")}: ${money(week.income)}`;
    const spending=document.createElement("span");spending.className="chart-bar spending";spending.style.height=`${Math.max(2,week.expenses/scale*82)}%`;spending.title=`${t("spending")}: ${money(week.expenses)}`;
    const label=document.createElement("span");label.className="chart-month";label.textContent=`${data.language==="es"?"Sem":"Wk"} ${index+1}`;
    group.append(income,spending,label);host.append(group);
  });
}
function dueInDays(due) {
  if(!due)return null;
  const now=new Date();now.setHours(0,0,0,0);
  const date=new Date(`${due}T00:00:00`);
  return Math.ceil((date-now)/86400000);
}
function dueLabel(days) {
  if(days===0)return t("dueToday");
  if(days===1)return t("dueTomorrow");
  return `${t("dueIn")} ${days} ${t("days")}`;
}
function renderAlerts() {
  const cards=data.accounts.filter(item=>item.type==="credit"&&item.due).map(account=>({...account,days:dueInDays(account.due)}))
    .filter(account=>account.days!==null&&account.days>=0&&account.days<=30).sort((a,b)=>a.days-b.days);
  byId("alert-count").textContent=cards.length;
  const host=byId("payment-alerts");host.replaceChildren();
  if(!cards.length){const empty=document.createElement("p");empty.className="alerts-empty";empty.textContent=t("noPayments");host.append(empty);return;}
  cards.forEach(account=>{
    const item=document.createElement("div");item.className="payment-item";
    const brand=document.createElement("span");brand.className="payment-brand";brand.textContent=account.name.slice(0,2).toUpperCase();
    const copy=document.createElement("span");copy.className="payment-copy";
    const title=document.createElement("strong");title.textContent=account.name;
    const due=document.createElement("span");due.textContent=`${t("dueOn")} ${formatDate(account.due)}`;
    copy.append(title,due);
    const amounts=document.createElement("span");amounts.className="payment-amount";
    const full=document.createElement("strong");full.textContent=`${t("statementBalance")}: ${money(account.statement ?? account.balance)}`;
    const minimum=document.createElement("span");minimum.textContent=`${money(account.minimum)} ${t("minimumDue").toLowerCase()}`;
    amounts.append(full,minimum);item.append(brand,copy,amounts);host.append(item);
  });
}
function accountIcon(type){return type==="credit"?"▣":type==="line"?"↔":"▤";}
function renderAccounts() {
  const groups={debit:"debit-accounts",credit:"credit-accounts",line:"line-accounts"};
  const preview=byId("account-preview-list");preview.replaceChildren();
  byId("empty-account-preview").hidden=data.accounts.length>0;
  data.accounts.slice(0,4).forEach(account=>{
    const row=document.createElement("div");row.className="preview-account";
    const avatar=document.createElement("span");avatar.className=`account-avatar avatar-${account.type}`;avatar.textContent=accountIcon(account.type);
    const name=document.createElement("span");name.className="account-name";name.textContent=account.name;
    const type=document.createElement("span");type.className="account-kind";type.textContent=t(account.type==="debit"?"debitCard":account.type==="credit"?"creditCard":"creditLine");name.append(type);
    const balance=document.createElement("span");balance.className="account-balance";balance.textContent=money(account.type==="debit"?(account.balance||0):-(account.balance||0));
    row.append(avatar,name,balance);preview.append(row);
  });
  Object.entries(groups).forEach(([type,id])=>{
    const host=byId(id);host.replaceChildren();
    const accounts=data.accounts.filter(account=>account.type===type);
    if(!accounts.length){const empty=document.createElement("p");empty.className="no-accounts";empty.textContent=data.language==="es"?"Aún no hay cuentas en esta sección.":"No accounts in this section yet.";host.append(empty);return;}
    accounts.forEach(account=>{
      const row=document.createElement("div");row.className=`full-account ${type}-account`;
      const name=document.createElement("div");name.className="full-account-name";name.textContent=account.name;
      const description=document.createElement("small");description.textContent=t(type==="debit"?"debitCard":type==="credit"?"creditCard":"creditLine");name.append(description);
      const balance=detailCell(type==="debit"?t("availableBalance"):t("balance"),money(account.balance));
      row.append(name,balance);
      if(type==="credit"){
        const payment=detailCell(t("minimumDue"),money(account.minimum));payment.querySelector(".account-detail-value").classList.add("account-payment");
        const statement=detailCell(t("statementBalance"),money(account.statement ?? account.balance));statement.querySelector(".account-detail-value").classList.add("account-payment");
        const due=detailCell(t("dueDate"),account.due?formatDate(account.due,{month:"short",day:"numeric",year:"numeric"}):"—");
        row.append(payment,statement,due);
      }else if(type==="line"){
        row.append(detailCell(t("availableCredit"),money(Math.max(0,(account.limit||0)-(account.balance||0)))),detailCell(t("creditLimitOptional"),account.limit?money(account.limit):"—"));
      }else{
        row.append(detailCell(t("accountType"),t("debitCard")));
      }
      host.append(row);
    });
  });
}
function detailCell(label,value){const cell=document.createElement("div");const l=document.createElement("span");l.className="account-detail-label";l.textContent=label;const v=document.createElement("strong");v.className="account-detail-value";v.textContent=value;cell.append(l,v);return cell;}
function renderTransactions() {
  const body=byId("transactions-body");body.replaceChildren();
  const search=byId("transaction-search").value.toLocaleLowerCase();
  const categoryFilter=byId("category-filter").value;
  const list=data.transactions.filter(item=>{
    const matchesText=`${item.description} ${categoryName(item.category)} ${accountName(item.accountId)}`.toLocaleLowerCase().includes(search);
    return matchesText&&(categoryFilter==="all"||item.category===categoryFilter);
  }).sort((a,b)=>b.date.localeCompare(a.date));
  list.forEach(transaction=>{
    const row=document.createElement("tr");
    const date=document.createElement("td");date.textContent=formatDate(transaction.date,{month:"short",day:"numeric",year:"numeric"});
    const desc=document.createElement("td");desc.className="transaction-desc";desc.textContent=transaction.description;
    const category=document.createElement("td");const pill=document.createElement("span");pill.className="category-pill";pill.textContent=categoryName(transaction.category);category.append(pill);
    const account=document.createElement("td");account.textContent=accountName(transaction.accountId);
    const amount=document.createElement("td");amount.className=`amount-cell ${transaction.type==="income"?"amount-positive":"amount-negative"}`;amount.textContent=`${transaction.type==="income"?"+":"−"}${money(transaction.amount)}`;
    const actions=document.createElement("td");const group=document.createElement("div");group.className="row-actions";
    const edit=document.createElement("button");edit.type="button";edit.setAttribute("aria-label",t("edit"));edit.textContent="✎";edit.addEventListener("click",()=>openTransactionDialog(transaction));
    const remove=document.createElement("button");remove.type="button";remove.setAttribute("aria-label",t("delete"));remove.textContent="×";remove.addEventListener("click",()=>deleteTransaction(transaction.id));
    group.append(edit,remove);actions.append(group);row.append(date,desc,category,account,amount,actions);body.append(row);
  });
  byId("empty-transactions").hidden=list.length>0;
  const select=byId("category-filter");
  const selected=select.value;
  select.replaceChildren();
  const all=document.createElement("option");all.value="all";all.textContent=t("allCategories");select.append(all);
  [...new Set(data.transactions.map(item=>item.category))].forEach(value=>{const option=document.createElement("option");option.value=value;option.textContent=categoryName(value);select.append(option);});
  select.value=selected;
}
function populateAccountOptions() {
  ["transaction-account","import-account"].forEach(id=>{
    const select=byId(id);if(!select)return;
    const selected=select.value;select.replaceChildren();
    if(id==="transaction-account"){const placeholder=document.createElement("option");placeholder.value="";placeholder.textContent=t("accountPlaceholder");select.append(placeholder);}
    data.accounts.forEach(account=>{const option=document.createElement("option");option.value=account.id;option.textContent=account.name;select.append(option);});
    if(data.accounts.some(account=>account.id===selected))select.value=selected;
  });
  ["transaction-category"].forEach(id=>{
    const select=byId(id);if(!select)return;
    const selected=select.value;select.replaceChildren();
    categories.forEach(category=>{const option=document.createElement("option");option.value=category.id;option.textContent=category[data.language];select.append(option);});
    if(selected)select.value=selected;
  });
}
function openTransactionDialog(transaction=null) {
  const form=byId("transaction-form");form.reset();populateAccountOptions();
  byId("transaction-id").value=transaction?.id||"";
  byId("transaction-description").value=transaction?.description||"";
  byId("transaction-amount").value=transaction?.amount||"";
  byId("transaction-date").value=transaction?.date||dateISO(0);
  byId("transaction-category").value=transaction?.category||"other";
  byId("transaction-account").value=transaction?.accountId||data.accounts[0]?.id||"";
  byId("transaction-type").value=transaction?.type||"expense";
  byId("transaction-dialog-title").textContent=t(transaction?"edit":"addTransaction");
  byId("transaction-dialog").showModal();
}
function deleteTransaction(id) {
  if(!window.confirm(t("confirmDelete")))return;
  data.transactions=data.transactions.filter(item=>item.id!==id);saveData();render();showToast(t("deleted"));
}
function showToast(message) {
  const toast=byId("toast");toast.textContent=message;toast.classList.add("show");
  clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove("show"),2400);
}
function navigate(page) {
  document.querySelectorAll(".page").forEach(section=>{const active=section.id===`page-${page}`;section.classList.toggle("active",active);section.hidden=!active;});
  document.querySelectorAll(".nav-link").forEach(link=>link.classList.toggle("active",link.dataset.page===page));
  const activeLink=document.querySelector(`.nav-link[data-page="${page}"]`);
  byId("current-page-label").textContent=activeLink?.querySelector("[data-i18n]")?.textContent||t("overview");
  if(location.hash!==`#${page}`)history.replaceState(null,"",`#${page}`);
  window.scrollTo({top:0,behavior:"smooth"});
}
function addImportRow(row={}) {
  const tr=document.createElement("tr");
  const dateCell=document.createElement("td");const date=document.createElement("input");date.type="date";date.value=row.date||dateISO(0);date.setAttribute("aria-label",t("date"));
  const descCell=document.createElement("td");const description=document.createElement("input");description.type="text";description.maxLength=80;description.value=row.description||"";description.placeholder=t("description");description.setAttribute("aria-label",t("description"));
  const categoryCell=document.createElement("td");const category=document.createElement("select");category.setAttribute("aria-label",t("category"));
  categories.forEach(item=>{const option=document.createElement("option");option.value=item.id;option.textContent=item[data.language];category.append(option);});
  category.value=row.category||"other";
  const amountCell=document.createElement("td");const amount=document.createElement("input");amount.type="number";amount.step="0.01";amount.min="0";amount.value=row.amount??"";amount.placeholder="0.00";amount.setAttribute("aria-label",t("amount"));
  const typeCell=document.createElement("td");const type=document.createElement("select");type.setAttribute("aria-label",t("type"));
  [["expense",t("expense")],["income",t("income")]].forEach(([value,label])=>{const option=document.createElement("option");option.value=value;option.textContent=label;type.append(option);});
  type.value=row.type||"expense";
  const actionCell=document.createElement("td");const remove=document.createElement("button");remove.type="button";remove.className="delete-import-row";remove.setAttribute("aria-label",t("deleteRow"));remove.textContent="×";remove.addEventListener("click",()=>{tr.remove();updateImportValidity();});
  [dateCell,descCell,categoryCell,amountCell,typeCell].forEach((cell,index)=>cell.append([date,description,category,amount,type][index]));
  actionCell.append(remove);tr.append(dateCell,descCell,categoryCell,amountCell,typeCell,actionCell);byId("import-review-body").append(tr);
  [date,description,category,amount,type].forEach(input=>input.addEventListener("input",updateImportValidity));
}
function updateImportValidity() {
  const rows=[...byId("import-review-body").rows];
  const ready=rows.length>0&&rows.every(row=>row.cells[0].querySelector("input").value&&row.cells[1].querySelector("input").value.trim()&&Number(row.cells[3].querySelector("input").value)>0);
  byId("save-import").disabled=!ready||data.accounts.length===0;
}
function parseCSV(text) {
  const rows=[];let row=[],cell="",quoted=false;
  for(let i=0;i<text.length;i++){
    const char=text[i],next=text[i+1];
    if(char==='"'&&quoted&&next==='"'){cell+='"';i++;}
    else if(char==='"'){quoted=!quoted;}
    else if(char===","&&!quoted){row.push(cell);cell="";}
    else if((char==="\n"||char==="\r")&&!quoted){if(char==="\r"&&next==="\n")i++;row.push(cell);if(row.some(value=>value.trim()))rows.push(row);row=[];cell="";}
    else cell+=char;
  }
  if(cell||row.length){row.push(cell);if(row.some(value=>value.trim()))rows.push(row);}
  if(rows.length<2)return [];
  const headers=rows.shift().map(value=>value.trim().toLowerCase());
  const findHeader=(matches)=>headers.findIndex(header=>matches.some(match=>header.includes(match)));
  const dateIndex=findHeader(["date","fecha"]),descIndex=findHeader(["description","desc","merchant","memo","descripción","comercio"]),amountIndex=findHeader(["amount","monto","debit","credit"]);
  const categoryIndex=findHeader(["category","categoría"]);
  if(dateIndex<0||descIndex<0||amountIndex<0)return [];
  return rows.map(values=>{
    let rawAmount=(values[amountIndex]||"").replace(/[$,\s]/g,"");
    if(headers[amountIndex].includes("debit")&&Number(rawAmount)>0)rawAmount=`-${rawAmount}`;
    if(headers[amountIndex].includes("credit")&&Number(rawAmount)>0)rawAmount=`${rawAmount}`;
    const amount=Number(rawAmount);
    const rawDate=(values[dateIndex]||"").trim();
    let date=rawDate;
    if(/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(rawDate)){const [month,day,year]=rawDate.split("/");date=`${year}-${month.padStart(2,"0")}-${day.padStart(2,"0")}`;}
    else if(/^\d{4}-\d{1,2}-\d{1,2}$/.test(rawDate)){const [year,month,day]=rawDate.split("-");date=`${year}-${month.padStart(2,"0")}-${day.padStart(2,"0")}`;}
    const description=(values[descIndex]||"").trim();
    const amountAbs=Math.abs(amount);
    let category="other";
    if(categoryIndex>=0){const candidate=categories.find(item=>item.id===(values[categoryIndex]||"").trim().toLowerCase()||item.en.toLowerCase()===(values[categoryIndex]||"").trim().toLowerCase()||item.es.toLowerCase()===(values[categoryIndex]||"").trim().toLowerCase());if(candidate)category=candidate.id;}
    return {date,description,amount:amountAbs,category,type:amount<0?"expense":"expense"};
  }).filter(item=>item.date&&item.description&&Number.isFinite(item.amount)&&item.amount>0);
}
byId("language-select").addEventListener("change",event=>{data.language=event.target.value;saveData();applyLanguage();});
document.querySelectorAll(".nav-link").forEach(link=>link.addEventListener("click",event=>{event.preventDefault();navigate(link.dataset.page);}));
document.querySelectorAll("[data-page-link]").forEach(link=>link.addEventListener("click",event=>{event.preventDefault();navigate(link.dataset.pageLink);}));
byId("open-add-transaction").addEventListener("click",()=>openTransactionDialog());
byId("transactions-add").addEventListener("click",()=>openTransactionDialog());
byId("open-add-account").addEventListener("click",()=>byId("account-dialog").showModal());
byId("dashboard-add-account").addEventListener("click",()=>byId("account-dialog").showModal());
byId("empty-add-account").addEventListener("click",()=>byId("account-dialog").showModal());
byId("open-import").addEventListener("click",()=>{importRows=[];byId("import-review-body").replaceChildren();byId("import-status").textContent="";byId("import-review-wrap").hidden=true;byId("pdf-preview").hidden=true;byId("statement-file").value="";byId("save-import").disabled=true;populateAccountOptions();byId("import-dialog").showModal();});
byId("transaction-search").addEventListener("input",renderTransactions);
byId("category-filter").addEventListener("change",renderTransactions);
byId("savings-rate").addEventListener("input",event=>{data.savingsRate=Number(event.target.value);byId("savings-rate-label").textContent=data.savingsRate;const totals=monthlyTotals();byId("planner-savings").textContent=money(totals.income*data.savingsRate/100);byId("planner-allocation").textContent=money(totals.income*data.savingsRate/100);byId("planner-flexible").textContent=money(Math.max(0,totals.income-totals.expenses-totals.income*data.savingsRate/100));byId("goal-amount").textContent=money(totals.income*data.savingsRate/100);byId("goal-caption").textContent=`${data.savingsRate}% ${data.language==="es"?"de los ingresos mensuales":"of your monthly income"}`;byId("goal-progress").style.width=`${Math.min(100,totals.income?Math.max(0,totals.income-totals.expenses)/(totals.income*data.savingsRate/100)*100:0)}%`;saveData();});
byId("transaction-form").addEventListener("submit",event=>{
  event.preventDefault();
  const description=byId("transaction-description").value.trim(),amount=Number(byId("transaction-amount").value),accountId=byId("transaction-account").value;
  if(!description||!amount||!accountId){showToast(t("missingRequired"));return;}
  const id=byId("transaction-id").value;
  const transaction={id:id||`tx-${Date.now()}`,date:byId("transaction-date").value,description,category:byId("transaction-category").value,accountId,amount,type:byId("transaction-type").value};
  if(id){data.transactions=data.transactions.map(item=>item.id===id?transaction:item);showToast(t("edited"));}
  else{data.transactions.unshift(transaction);showToast(t("transactionAdded"));}
  saveData();render();byId("transaction-dialog").close();
});
byId("account-type").addEventListener("change",event=>byId("account-form").querySelector(".form-grid").classList.toggle("credit-mode",event.target.value==="credit"));
byId("account-form").addEventListener("submit",event=>{
  event.preventDefault();
  const type=byId("account-type").value;
  const account={id:`ac-${Date.now()}`,name:byId("account-name").value.trim(),type,balance:Number(byId("account-balance").value)||0};
  const limit=Number(byId("account-limit").value);
  if(limit)account.limit=limit;
  if(type==="credit"){account.minimum=Number(byId("account-minimum").value)||0;account.statement=Number(byId("account-statement").value)||account.balance;account.due=byId("account-due").value;}
  data.accounts.push(account);saveData();render();byId("account-form").reset();byId("account-form").querySelector(".form-grid").classList.remove("credit-mode");byId("account-dialog").close();showToast(t("accountAdded"));
});
byId("statement-file").addEventListener("change",async event=>{
  const file=event.target.files?.[0];if(!file)return;
  byId("import-review-body").replaceChildren();byId("import-review-wrap").hidden=false;
  if(importObjectUrl){URL.revokeObjectURL(importObjectUrl);importObjectUrl=undefined;}
  byId("pdf-preview").hidden=true;byId("pdf-frame").src="about:blank";
  const isPDF=file.type==="application/pdf"||file.name.toLowerCase().endsWith(".pdf");
  const isCSV=file.type==="text/csv"||file.name.toLowerCase().endsWith(".csv");
  if(!isPDF&&!isCSV){byId("import-status").textContent=t("chooseValidFile");return;}
  if(!data.accounts.length){byId("import-status").textContent=t("noAccount");return;}
  byId("pdf-preview").hidden=!isPDF;
  if(isPDF){importObjectUrl=URL.createObjectURL(file);byId("pdf-frame").src=importObjectUrl;byId("import-status").textContent=t("pdfReview");addImportRow();updateImportValidity();return;}
  try{
    const rows=parseCSV(await file.text());
    if(!rows.length){byId("import-status").textContent=t("csvNoRows");addImportRow();updateImportValidity();return;}
    rows.forEach(row=>addImportRow(row));byId("import-status").textContent=t("csvFound");updateImportValidity();
  }catch(error){console.error("Could not read the selected statement.",error);byId("import-status").textContent=t("fileReadError");}
});
byId("add-import-row").addEventListener("click",()=>{addImportRow();updateImportValidity();});
byId("import-form").addEventListener("submit",event=>{
  event.preventDefault();
  const rows=[...byId("import-review-body").rows].map(row=>({id:`tx-${Date.now()}-${Math.random().toString(16).slice(2)}`,date:row.cells[0].querySelector("input").value,description:row.cells[1].querySelector("input").value.trim(),category:row.cells[2].querySelector("select").value,amount:Number(row.cells[3].querySelector("input").value),type:row.cells[4].querySelector("select").value,accountId:byId("import-account").value}));
  if(!rows.length||rows.some(item=>!item.date||!item.description||!item.amount||!item.accountId)){showToast(t("missingRequired"));return;}
  data.transactions.unshift(...rows);saveData();render();byId("import-dialog").close();showToast(`${rows.length} ${t("imported")}`);
});
document.querySelectorAll("[data-close-dialog]").forEach(button=>button.addEventListener("click",()=>button.closest("dialog").close()));
byId("import-dialog").addEventListener("close",()=>{if(importObjectUrl){URL.revokeObjectURL(importObjectUrl);importObjectUrl=undefined;}byId("pdf-frame").src="about:blank";byId("pdf-preview").hidden=true;});
byId("account-form").addEventListener("reset",()=>setTimeout(()=>byId("account-form").querySelector(".form-grid").classList.remove("credit-mode"),0));
const initialPage=location.hash.slice(1);
applyLanguage();
navigate(["dashboard","accounts","transactions","planner"].includes(initialPage)?initialPage:"dashboard");
if("serviceWorker" in navigator&&location.protocol!=="file:") {
  window.addEventListener("load",()=>navigator.serviceWorker.register("./service-worker.js").catch(error=>console.error("Offline support could not be enabled.",error)));
}

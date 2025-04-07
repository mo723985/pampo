let subscriptions = JSON.parse(localStorage.getItem("subscriptions")) || [
    { name: "أبو فارس", amount: "100", phone: "01204932458", paymentStatus: { 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false } },
    { name: "إسلام الليثى", amount: "300", phone: "01102632895", paymentStatus: { 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false } },
    { name: "مصطفى الليثى", amount: "260", phone: "01121324907", paymentStatus: { 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false } },
    { name: "سامح الليثى", amount: "260", phone: "01102632896", paymentStatus: { 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false } },
    { name: "عماد حمدى تبع أحمد جمعه" , amount: "260", phone: "01149991624", paymentStatus: { 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false } },
    { name: "أحمد عبدالفتاح", amount: "260", phone: "01552290266", paymentStatus: { 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false } },
    { name: "أحمد جمعه محجوبة", amount: "260", phone: "0157593611", paymentStatus: { 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false } },
    { name: "أخو أحمد جمعه ", amount: "260", phone: "01144529401", paymentStatus: { 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false } },
    { name: "ممدوج", amount: "100", phone: "01281320894", paymentStatus: { 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false } },
    { name: "محمود أحمد درويش", amount: "260", phone: "01119170258", paymentStatus: { 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false } },
    { name: "محمد جابر نصر", amount: "260", phone: "01127151215", paymentStatus: { 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false } },
    //{ name: "أبو أدم رمضان", amount: "260", phone: "", paymentStatus: { 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false } },
    { name: "حسن تبع اسلام", amount: "260", phone: "01144967985", paymentStatus: { 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false } }, 
    { name: "محمد سعودى", amount: "260", phone: "01289276990", paymentStatus: { 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false } },
    { name: "جمال جابر", amount: "260", phone: "01115253734", paymentStatus: { 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false } },
    { name: "أحمد عادل الجزار", amount: "260", phone: "01123713251", paymentStatus: { 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false } },
    { name: "منصور خطيب ندى", amount: "260", phone: "01123713251", paymentStatus: { 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false } },
    { name: "أم ادم", amount: "260", phone: "01282360532", paymentStatus: { 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false } },
    { name: "عرفة مشهور", amount: "260", phone: "01140345190", paymentStatus: { 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false } },
    { name: "محمود تبع عرفة مشهور", amount: "260", phone: "01144967985", paymentStatus: { 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false } },
    { name: "أحمد قرنى تبع اسلام الليثى", amount: "260", phone: "01146865717", paymentStatus: { 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false } },
    { name: "أبو سيف عماد تبع اسلام الليثى", amount: "260", phone: "01000000001", paymentStatus: { 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false } },
    { name: "حسن محمود", amount: "260", phone: "01553981029", paymentStatus: { 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false } },
    { name: "محمود عبدالستار", amount: "260", phone: "01121325520", paymentStatus: { 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false } },
    { name: "محمد حمدى أمين", amount: "260", phone: "01555615054", paymentStatus: { 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false } },
   // { name: "أبو ادم", amount: "260", phone: "01000000001", paymentStatus: { 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false } },
    { name: "شعبان ربيع", amount: "260", phone: "01226791209", paymentStatus: { 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false } },
    { name: "زوج أخت محمود جابر", amount: "260", phone: "01143386741", paymentStatus: { 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false } },
    { name: "أخت محمود جابر", amount: "260", phone: "01285844543", paymentStatus: { 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false } },
    { name: "أحمد تبع هادى جابر", amount: "260", phone: "01112148509", paymentStatus: { 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false } },
    { name: "أحمد بدران تبع اسلام الليثى", amount: "260", phone: "01145825318", paymentStatus: { 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false } },
    { name: "محمود جابر", amount: "260", phone: "01225191421", paymentStatus: { 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false } },
    { name: "تبع محمود جابر", amount: "260", phone: "01282996602", paymentStatus: { 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false } },
   // { name: "", amount: "260", phone: "", paymentStatus: { 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false } },
    { name: "تبع محمود عبدالله", amount: "260", phone: "01146557132", paymentStatus: { 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false } },
    { name: "خالد عيد", amount: "260", phone: "01222513217", paymentStatus: { 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false } },
    { name: "محمود جيكا", amount: "260", phone: "01149558702", paymentStatus: { 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false } },
    { name: "الشيخ شعبان", amount: "260", phone: "01141393478", paymentStatus: { 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false } },
    { name: "عبدو سنترال اهناسيا", amount: "260", phone: "01127141194", paymentStatus: { 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false } },
    { name: "أبو فريدة تبع اسلام الليثى", amount: "260", phone: "", paymentStatus: { 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false } },
    { name: "الشيخ بسام", amount: "260", phone: "01146281518", paymentStatus: { 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false } },
    { name: "أخو أحمد فرع", amount: "260", phone: "01126812275", paymentStatus: { 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false } },
    { name: "أحمد خالد", amount: "260", phone: "01150398041", paymentStatus: { 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false } },
    { name: "أم رفعت", amount: "260", phone: "01282385048", paymentStatus: { 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false } },
    { name: "ناصر بنى بخيت", amount: "260", phone: "01105949576", paymentStatus: { 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false } },
    { name: "تبع ناصر بنى بخيت", amount: "260", phone: "01152646862", paymentStatus: { 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false } },
    { name: "تبع محمود عبدالله", amount: "260", phone: "01114075817", paymentStatus: { 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false } },
    { name: "تبع عبدو سنترال", amount: "260", phone: "01156232260", paymentStatus: { 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false } },
    { name: "محمد رمضان تبع اسلام الليثى", amount: "260", phone: "01141876179", paymentStatus: { 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false } },
    { name: "رجب محمد", amount: "260", phone: "01141149182", paymentStatus: { 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false } },
    { name: " عبدالرحمن تبع هادي", amount: "260", phone: "01153752531", paymentStatus: { 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false } },
    { name: "اسلام المحمدى تبع هادي", amount: "260", phone: "01140277971", paymentStatus: { 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false } },
    { name: "كريم رمضان", amount: "260", phone: "", paymentStatus: { 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false } },
    { name: "محمد جميل تبع هادى", amount: "260", phone: "01150708741", paymentStatus: { 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false } },
    { name: "زياد بيتك تبع هادى", amount: "260", phone: "01144849012", paymentStatus: { 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false } },
    { name: "البيت اسلام الليثى", amount: "260", phone: "01104918548", paymentStatus: { 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false } },
    { name: "البيت مصطفى اللليثى", amount: "260", phone: "01144253033", paymentStatus: { 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false } },
    { name: "تبع حسن تبع اسلام الليثى", amount: "260", phone: "01122947502", paymentStatus: { 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false } },
    { name: "أبو ادم رمضان", amount: "260", phone: "", paymentStatus: { 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false } },
    { name: "أم كريم", amount: "260", phone: "01142731090", paymentStatus: { 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false } },
   

];



function openEditModal(index) {
    let subscription = subscriptions[index]; 
    document.getElementById("editName").value = subscription.name;
    document.getElementById("editAmount").value = subscription.amount;
    document.getElementById("editPhone").value = subscription.phone;
    
    // حفظ الفهرس في المتغير
    document.getElementById("editModal").dataset.index = index;  
    document.getElementById("editModal").classList.remove("hidden");
}
/** 
function renderSubscriptions() {
    const tableBody = document.getElementById("subscriptions");
    tableBody.innerHTML = "";

    subscriptions.forEach((subscription, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${subscription.name}</td>
            <td>${subscription.amount}</td>
             <td><a href="tel:${subscription.phone}">${subscription.phone}</a></td>
            <td onclick="togglePayment(${index}, 4)">${subscription.paymentStatus[4] ? "✅" : "❌"}</td>
            <td onclick="togglePayment(${index}, 5)">${subscription.paymentStatus[5] ? "✅" : "❌"}</td>
            <td onclick="togglePayment(${index}, 6)">${subscription.paymentStatus[6] ? "✅" : "❌"}</td>
            <td onclick="togglePayment(${index}, 7)">${subscription.paymentStatus[7] ? "✅" : "❌"}</td>
            <td onclick="togglePayment(${index}, 8)">${subscription.paymentStatus[8] ? "✅" : "❌"}</td>
            <td onclick="togglePayment(${index}, 9)">${subscription.paymentStatus[9] ? "✅" : "❌"}</td>
            <td onclick="togglePayment(${index}, 10)">${subscription.paymentStatus[10] ? "✅" : "❌"}</td>
            <td onclick="togglePayment(${index}, 11)">${subscription.paymentStatus[11] ? "✅" : "❌"}</td>
            <td onclick="togglePayment(${index}, 12)">${subscription.paymentStatus[12] ? "✅" : "❌"}</td>
            <td><button onclick="editSubscription(${index})">تعديل</button></td>
            <td><button onclick="deleteSubscription(${index})">حذف</button></td>
        `;
        tableBody.appendChild(row);
    });
}*/

function renderSubscriptions() {
    let tbody = document.getElementById("subscriptions");
    tbody.innerHTML = ""; // تفريغ الجدول قبل إعادة ملء البيانات

    subscriptions.forEach((sub, index) => {
        let row = `<tr>
            <td>${sub.name}</td>
            <td>${sub.amount}</td>
             <td><a href="tel:${sub.phone}">${sub.phone}</a></td>
            <td onclick="togglePayment(${index}, 4)">${sub.paymentStatus[4] ? "✅" : "❌"}</td>
            <td onclick="togglePayment(${index}, 5)">${sub.paymentStatus[5] ? "✅" : "❌"}</td>
            <td onclick="togglePayment(${index}, 6)">${sub.paymentStatus[6] ? "✅" : "❌"}</td>
            <td onclick="togglePayment(${index}, 7)">${sub.paymentStatus[7] ? "✅" : "❌"}</td>
            <td onclick="togglePayment(${index}, 8)">${sub.paymentStatus[8] ? "✅" : "❌"}</td>
            <td onclick="togglePayment(${index}, 9)">${sub.paymentStatus[9] ? "✅" : "❌"}</td>
            <td onclick="togglePayment(${index}, 10)">${sub.paymentStatus[10] ? "✅" : "❌"}</td>
            <td onclick="togglePayment(${index}, 11)">${sub.paymentStatus[11] ? "✅" : "❌"}</td>
            <td onclick="togglePayment(${index}, 12)">${sub.paymentStatus[12] ? "✅" : "❌"}</td>
            <td><button onclick="openEditModal(${index})">تعديل</button></td>
            <td><button onclick="deleteSubscription(${index})">حذف</button></td>
        </tr>`;
        tbody.innerHTML += row;
    });


}



function togglePayment(index, month) {
    subscriptions[index].paymentStatus[month] = !subscriptions[index].paymentStatus[month];
    localStorage.setItem("subscriptions", JSON.stringify(subscriptions));
    renderSubscriptions();
}

function addSubscription() {
    const name = document.getElementById("name").value;
    const amount = document.getElementById("amount").value;
    const phone = document.getElementById("phone").value;

    if (name && amount && phone) {
        subscriptions.push({
            name,
            amount,
            phone,
            paymentStatus: { 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false }
        });
        localStorage.setItem("subscriptions", JSON.stringify(subscriptions));
        renderSubscriptions();
    } else {
        alert("يرجى ملء جميع الحقول.");
    }
}

function editSubscription(index) {
    const subscription = subscriptions[index];
    document.getElementById("editName").value = subscription.name;
    document.getElementById("editAmount").value = subscription.amount;
    document.getElementById("editPhone").value = subscription.phone;
    document.getElementById("editModal").classList.remove("hidden");
}

/**function saveEdit() {
    const index = document.getElementById("editIndex").value;
    const name = document.getElementById("editName").value;
    const amount = document.getElementById("editAmount").value;
    const phone = document.getElementById("editPhone").value;

    subscriptions[index] = { name, amount, phone, paymentStatus: subscriptions[index].paymentStatus };
    localStorage.setItem("subscriptions", JSON.stringify(subscriptions));
    renderSubscriptions();
    closeEditModal();
}
**/


function saveEdit() {
    let index = document.getElementById("editModal").dataset.index;
    if (index !== undefined) {
        subscriptions[index].name = document.getElementById("editName").value;
        subscriptions[index].amount = document.getElementById("editAmount").value;
        subscriptions[index].phone = document.getElementById("editPhone").value;
        
        // حفظ التعديلات في localStorage
        localStorage.setItem("subscriptions", JSON.stringify(subscriptions));
        
        // إعادة عرض البيانات وتحديث الجدول
        renderSubscriptions();
        
        // إغلاق نافذة التعديل
        closeEditModal();
    }
}







function closeEditModal() {
    document.getElementById("editModal").classList.add("hidden");
}

function deleteSubscription(index) {
    if (confirm("هل أنت متأكد من حذف هذا المشترك؟")) {
        subscriptions.splice(index, 1);
        localStorage.setItem("subscriptions", JSON.stringify(subscriptions));
        renderSubscriptions();
    }
}


renderSubscriptions();



const correctCode = "0000";

// اطلب من المستخدم الرمز
const userInput = prompt("من فضلك أدخل رمز الدخول:");

// تحقق من الرمز
if (userInput === correctCode) {
  alert("تم الدخول بنجاح ✅");
  // الموقع هيكمل في التحميل عادي
} else {
  alert("رمز خاطئ ❌، لا يمكنك الدخول.");
  // اقفله أو حوله لصفحة تانية
  window.location.href = "https://www.google.com"; // مثال: تحويل لجوجل
}

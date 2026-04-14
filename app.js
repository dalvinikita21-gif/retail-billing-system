
function generateBill() {
    let price = document.getElementById("price").value;
    let quantity = document.getElementById("quantity").value;

    let total = price * quantity;
    let gst = total * 0.18;
    let finalAmount = total + gst;

    document.getElementById("result").innerHTML =
        "Total: ₹" + total +
        "<br>GST (18%): ₹" + gst +
        "<br>Final Amount: ₹" + finalAmount;
}

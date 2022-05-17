function orderf() {
    console.log(order);
    console.log(cost);
    console.log(mail);

    if (confirm("Do you want to place an order to " + user[0] + " for " + order[0] + "?")) {
      window.open(mail);
    } else {

    }

  }
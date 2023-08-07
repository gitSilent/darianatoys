interface switchParams {
    status: string,
    color: string
}

export function orderStatus(status: string) {

    let params: switchParams = {
        status: "",
        color: ""
    }

    switch (status) {
        case "NW":
            params.status = "Оформлен"
            params.color = "#FF6347"

            return params
        case "IN":
            params.status = "В обработке"
            params.color = "#E3A164"

            return params
        case "RD":
            params.status = "Готов"
            params.color = "#32CD32"

            return params
    }

}
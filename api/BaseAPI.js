class BaseAPI {

    getData = async (suffix) => {

        const url = AddressAPI.getUrl(suffix)
        const response = await fetch(url)

        if (response.status == 200) {
            const json = await response.json();
            return json.data;
        } else {
            alert("Error on getting information from server");
        }
    }

    postData = async (suffix, data) => {
        let url = AddressAPI.getUrl(suffix);
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.status == 200) {
            const json = await response.json();
            return json.data;
        } else {
            alert("Error on getting information from server");
        }
    }
 getDataWithToken = (suffix, token) => {
    return new Promise((resolve, reject) => {
        let url = AddressAPI.getUrl(suffix);

        let req = new XMLHttpRequest();

        req.open("GET", url);

        req.setRequestHeader('Authorization', 'Bearer ' + token);

        req.onreadystatechange = function () {
            if (this.readyState === 4) {

                if (this.status === 200) {
                    const json = JSON.parse(this.responseText);
                    resolve(json.data);
                } else {
                    reject("Error on getting information from server");
                }

            }
        };

        req.send();
    });
}
}
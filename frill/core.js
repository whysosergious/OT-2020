
// Lets go!

window.addEventListener("load", lev => {

    window.dataCook = {

        writer: "mth/writer.php",

         // main function and async request
        cook: function(url, formData) {

            fetch(url, {
                method: "POST",
                body: formData
            })
            .then(res =>
                res.json()).then(data => {
                    console.log(data);
                })
            .catch(msg => console.log(msg));
        },

        // write new file
        new: function(formData, fileName) {
            formData.append("fileName", fileName);

            this.cook(this.writer, formData);
        }
    }

    var formData = new FormData();
    formData.append("content", "Yey new file!!!")

    dataCook.new(formData, "bh");


}, {passive:true,once:true});
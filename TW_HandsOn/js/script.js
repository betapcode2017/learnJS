function doTheThing() {
    alert("This is the thing! ");
}

var elm = document.getElementById("about");
elm.addEventListener("click", doTheThing, false);

var contacts = {
    "addressBook": [
        {
            "name": "hillisha",
            "email": "hill@example.com",
        },
        {
            "name": "paul",
            "email": "cleveland@example.com",
        },
        {
            "name": "vishaal",
            "email": "vish@example.com",
        },
        {
            "name": "mike",
            "email": "grady@example.com",
        },
        {
            "name": "jamie",
            "email": "dusted@example.com",
        }
    ]
};

var flag;

var adr = {
    getAllContacts: function() {
        var target = document.getElementById("output");
        if(flag === undefined) {
            var book = contacts.addressBook;
            if(book.length > 0) {
                for(var i = 0; i < book.length; i++) {
                    target.innerHTML += '<p class="panel-body">' + book[i].name + ', <a href="mailto:' + book[i].email +'">' + book[i].email + '</a></p>';
                }
            }
            flag = 1;
        }
    },
    removeAllContacts: function() {
        var target = document.getElementById("output");
        if (flag !== undefined) {
            flag = undefined;
            target.innerHTML = "";
        }
    },
    addActiveSection: function() {
        this.parentNode.setAttribute("class","active");
    },
    removeActiveSection: function() {
        this.parentNode.removeAttribute("class");
    },

    addHoverClass: function() {
        this.setAttribute("class","hovering");
    },

    removeHoverClass: function() {
        this.removeAttribute("class");
    },

    submitSearch: function(event) {

        event.preventDefault();

        var search = document.getElementById("q").value;
        var book = contacts.addressBook;
        var target = document.getElementById("output");
        target.innerHTML = "";

        if(book.length > 0 && search !== "") {
            for(var i = 0; i < book.length; i++) {
                if(book[i].name.indexOf(search) !== -1) {
                    target.innerHTML += '<p class="panel-body">' + book[i].name + ', <a href="mailto:' + book[i].email +'">' + book[i].email + '</a></p>';
                }
            }
        }
    }
};

var btnGetAll = document.getElementById("get-all");
btnGetAll.addEventListener("click", adr.getAllContacts, false);

var btnRemoveAll = document.getElementById("remove-all");
btnRemoveAll.addEventListener("click", adr.removeAllContacts, false);

var searchField = document.getElementById("q");
searchField.addEventListener("focus", adr.addActiveSection, false);

searchField.addEventListener("blur" , adr.removeActiveSection, false);

var searchForm = document.getElementById("search-form");
searchForm.addEventListener("mouseover", adr.addHoverClass, false);
searchForm.addEventListener("mouseout", adr.removeHoverClass, false);

//var btnSearch = document.getElementById("btn-search");
//btnSearch.addEventListener("submit", adr.submitSearch, false);
searchForm.addEventListener("submit", adr.submitSearch, false);
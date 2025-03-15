// <![CDATA[

    document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".__img").forEach(function (el) {
        el.innerHTML = el.innerHTML.replace(
            /\*\*\*(https?:\/\/[^\s"'<>]+)/g,
            '<img src="$1" alt="Gambar" style="max-width:200px; height:auto;">'
        );
    });
});

// ]]>

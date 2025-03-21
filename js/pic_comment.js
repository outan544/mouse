// <![CDATA[

    document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".comment-content").forEach(function (el) {
        el.innerHTML = el.innerHTML.replace(
            /\*\*\*(https?:\/\/[^\s"'<>]+)/g,
            '<img src="$1" alt="Gambar" style="max-width:100px; height:auto;">'
        );
    });
});

// ]]>

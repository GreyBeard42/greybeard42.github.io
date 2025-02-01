async function getLatestCommit() {
    const url = 'https://api.github.com/repos/greybeard42/greybeard42.github.io/commits/main'

    try {
        const response = await fetch(url)
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`)

        const data = await response.json()

        document.getElementById("commit").innerHTML = `<a href=\"${data.html_url}\">${data.commit.message} by ${data.commit.author.name}</a>`
    } catch (error) {
        document.getElementById("commit").innerHTML = "Error fetching commit"
        console.error("Error fetching commit:", error);
    }
}

getLatestCommit();
import Editor from "./Editor.js";
import Sidebar from "./Sidebar.js";

export default function App({ $target }) {
    const $listContainer = document.createElement('div')
    $listContainer.className = 'listContainer'
    const $rendingContainer = document.createElement('div')
    $rendingContainer.className = 'rendingContainer'

    $target.appendChild($listContainer)
    $target.appendChild($rendingContainer)

    const initialState = []
    new Sidebar({
        $target: $listContainer, 
        initialState 
    })
    new Editor({ $target: $rendingContainer })
}
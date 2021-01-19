let sideNav,
  topNav,
  boardMenu,
  titleHeader,
  breadCrumbs,
  headerBanner,
  board,
  container;

function setupDOM() {
  // elems to hide
  sideNav = document.querySelector('[data-testid="ContextualNavigation"]');
  topNav = document.querySelector('[aria-label="Primary Navigation"]');
  boardMenu = document.querySelector("#ghx-operations");
  titleHeader = document.querySelector("#ghx-header");
  breadCrumbs = document.querySelector(
    '[data-testid="rapidboard-breadcrumbs"]'
  );
  headerBanner = document.querySelector('header[role="banner"]').parentNode
    .parentNode;

  // board
  board = document.querySelector("#ghx-work");
  // board container
  // container = document.querySelector(".ghx-work-wrapper");

  const haxor1337styles = document.createElement("style");
  haxor1337styles.id = "haxor1337styles";
  haxor1337styles.appendChild(
    document.createTextNode(
      "#ghx-work {padding: 0px !important; margin: 0px !important;} .super1337hax {display: none !important; height: 0 !important; width: 0 !important;}"
    )
  );
  document.body.insertBefore(haxor1337styles, document.body.firstChild);

  board.style.height = "100vh";
}

function toggleHideElems(elems) {
  elems.forEach((elem) => elem && elem.classList.toggle("super1337hax"));
}

toggleHideElems([
  sideNav,
  topNav,
  boardMenu,
  titleHeader,
  breadCrumbs,
  headerBanner,
]);

// const gridRemoved = [];
// function walkTheDOM(node, func) {
//   func(node);
//   node = node.firstChild;
//   while (node) {
//     walkTheDOM(node, func);
//     node = node.nextSibling;
//   }
// }

// function removeGrid(node) {
//   if (node.nodeType === 1) {
//     console.log(node.style.display);
//   }
//   if (node.nodeType === 1 && node.style.display === "grid") {
//     console.log("got here");
//     gridRemoved.push(node);
//     node.style.display = "block";
//   }
// }

// walkTheDOM(document.body, removeGrid);

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  increment
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "TU_KEY",
  authDomain: "TU_AUTH",
  projectId: "TU_PROJECT",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const ref = doc(db, "stats", "visitas");

async function visitas() {
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    await setDoc(ref, { total: 1 });
  } else {
    await updateDoc(ref, { total: increment(1) });
  }

  const data = await getDoc(ref);

  document.getElementById("contador-visitas").innerHTML =
    "🌎 Visitas: " + data.data().total;
}

visitas();
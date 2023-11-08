import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fxyzaiiqmqvyrdyiefnb.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ4eXphaWlxbXF2eXJkeWllZm5iIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc4MzczODMsImV4cCI6MjAxMzQxMzM4M30.C6zxQZqWBa7ajeJ6L4RIZ7SSwBEmPT8EfrviQO2hjBk';
const supabase = createClient(supabaseUrl, supabaseKey);

async function fetchCards() {
  const { data, error } = await supabase
    .from('flashcardDB')
    .select('question_number, question_text, answer, explanation');

  if (error) {
    console.error(error);
    return;
  }

  const container = document.getElementById('card-container');
  data.forEach((row) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="card-inner">
        <div class="card-front">
          <p>${row.question_number}</p>
          <p>${row.question_text}</p>
        </div>
        <div class="card-back">
          <p>${row.answer}</p>
          <p>${row.explanation}</p>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

fetchCards();

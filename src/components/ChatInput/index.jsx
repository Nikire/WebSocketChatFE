import React from 'react';

export default function ChatInput() {
  return (
    <div class="d-flex gap-2">
      <input
        type="text"
        class="form-control w-70"
        placeholder="Type your message here..."
        aria-label="Chat message"
        aria-describedby="send-button"
      />
      <div class="input-group-append">
        <button
          class="btn btn-primary btn-circle mr-1"
          type="button"
          id="send-button"
        >
          <i class="bi bi-send h5 m-0"></i>
        </button>
      </div>
    </div>
  );
}

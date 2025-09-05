json.extract! task, :id, :title, :description, :due_on, :duration, :created_at, :updated_at
json.url task_url(task, format: :json)

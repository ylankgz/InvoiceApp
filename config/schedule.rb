case @environment
when 'production'
  every 2.minutes do
    runner 'Invoice.delete_old', output: { error: "#{path}/log/error.log", standard: "#{path}/log/cron.log" }
  end
when 'development'
  set :rbenv_root, "/home/ulan/.rbenv"
  env :MAILTO, "root"
  env :PATH, "#{rbenv_root}/shims:#{rbenv_root}/bin:/bin:/usr/bin"
  env :RBENV_VERSION, "2.2.1"

  every 2.minutes do
    runner 'Invoice.delete_old', output: { error: "#{path}/log/error.log", standard: "#{path}/log/cron.log" }
  end
end

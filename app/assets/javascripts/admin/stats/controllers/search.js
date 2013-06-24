var SearchController = Marionette.Controller.extend({
  defaultQuery: {
    interval: 'day',
    tz: jstz.determine().name(),
    start: moment().subtract('days', 29).format('YYYY-MM-DD'),
    end: moment().format('YYYY-MM-DD'),
  },

  refreshFromQuery: function(query) {
    query = _.extend(this.defaultQuery, query);

    StatsApp.filterView.enableSearch();
    StatsApp.filterView.enableInterval();

    StatsApp.filterView.setFromQuery(query);
    this.loadResults(query);
  },

  loadResults: function(query) {
    StatsApp.loadingOverlayView.showSpinner();

    $.ajax({
      url: "/admin/stats/search.json",
      data: query,
      success: _.bind(this.handleLoadSuccess, this),
    });
  },

  handleLoadSuccess: function(data) {
    StatsApp.vizRegion.show(new IntervalHitsChartView(data.interval_hits));

    var totals = new Totals({
      totals: data.totals,
      facets: data.facets,
    });
    StatsApp.highlightsRegion.show(new NumberHighlightsView({ model: totals }));

    var logs = new Logs(data.logs);
    StatsApp.tableRegion.show(new LogTableView(logs));

    StatsApp.loadingOverlayView.hideSpinner();
  },
});